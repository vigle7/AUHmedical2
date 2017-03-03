import { Component, ElementRef, OnInit, ViewChild  } from "@angular/core";
import { Router } from "@angular/router";
import { DatePicker } from "ui/date-picker";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import "rxjs/add/operator/take";
import { Store } from '@ngrx/store';
import {User} from "../../share/user"
import * as dialogs from "ui/dialogs";
import {Observable} from 'rxjs/Rx';
const view = require("ui/core/view");
import activityIndicatorModule = require("ui/activity-indicator");

import firebase = require("nativescript-plugin-firebase");
const Toast = require("nativescript-toast");
const fetchModule = require("fetch");


interface AppState {
 state : Date
}

@Component({
  selector: "signUp",
  templateUrl: "pages/signUp/signUp.html",
  styleUrls: ["pages/signUp/signUp.css"],
})
export class SignUpComponent implements OnInit {
    //@ViewChild("firstTextFieldId") firstTextField: ElementRef;
    private store$: Observable<Date>;

    private user:User;

    private token:any;
    private showLogin:boolean;

    private isDatePickerVisible:boolean = false;


    constructor(private router: Router,private page: Page,private store: Store<AppState>) {

      this.user = new User();
      this.store$ =  this.store.select('dateData');
      this.store$.subscribe(s => this.user.ambbgndt = s);



    }

      ngOnInit() {

        firebase.addOnPushTokenReceivedCallback(
          (tokenreal)=> {
            console.log(tokenreal);   
            this.token = tokenreal;
          }
        )

        // let idTextfield = <TextField>this.firstTextField.nativeElement;   
        // idTextfield.focus();
          this.showLogin = true;

          let firstTextFieldId = this.page.getViewById<TextField>("firstTextFieldId");
              firstTextFieldId.focus();
      }




      showDatePicker() {
          let textFielsBDate = this.page.getViewById<TextField>("textFieldBDate");
          this.router.navigate(["/datePicker"]);
            setTimeout(function(){
            textFielsBDate.dismissSoftInput();
        }, 100);

      }

      signUp(){
          this.user.ambno = this.user.ambno.toUpperCase()
          if(!this.user.isTaiwanID()){
              this.displayActionDialog("請輸入正確的身份證號碼格式");
              return
          }

          if (!this.user.isValidEmail()) {
            this.displayActionDialog("請輸入有效的電子信箱");
            return;
          }

          if(this.user.ambno==="" || this.user.ambemail==="" ){
              this.displayActionDialog("請輸入所有資料");
              return
          }

          this.showLogin = false;

          let parsedate = this.user.ambbgndt.toISOString().slice(0,10).replace(/-/g,"");
          let taiwanDate = Number(parsedate) -19110000;
                  
          fetchModule.fetch("http://122.146.168.11/AppRegister/api/ApplyforReg/PushCloudNotifyNumber", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ambno: this.user.ambno, ambbgndt: "0"+taiwanDate, asrtype: "D2",ambemail: this.user.ambemail, ambaddr: this.user.ambaddr,atktokenid: this.token})
            })
            .then((response)=> {
              this.router.navigate(["/login"]);
                let toast = Toast.makeText("稍後寄出密碼通知");
                toast.show();
                this.showLogin = true;
             }, (error) =>{
                console.log(error);
            });



      }

       displayActionDialog(msg) {

          let options = { 
              message: msg,
              okButtonText: "確定"
          };
          dialogs.alert(options);
      }  
}

