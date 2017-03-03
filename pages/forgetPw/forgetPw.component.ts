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


import firebase = require("nativescript-plugin-firebase");
const Toast = require("nativescript-toast");
const fetchModule = require("fetch");


interface AppState {
 state : Date
}

@Component({
  selector: "forgetPw",
  templateUrl: "pages/forgetPw/forgetPw.html",
  styleUrls: ["pages/forgetPw/forgetPw.css"],
})
export class ForgetPwComponent implements OnInit {
    @ViewChild("id") id: ElementRef;
    private store$: Observable<Date>;

    private user:User;

    private token:any;
    //private ambemail$:Observable<Date>;

    private isDatePickerVisible:boolean = false;


    constructor(private router: Router,private page: Page,private store: Store<AppState>) {

      this.user = new User();
      this.store$ =  this.store.select('dateData');
      this.store$.subscribe(s => this.user.ambbgndt = s);



    }

    ngOnInit() {
      this.page.actionBar.title = "忘記密碼";
      let idTextfield = <TextField>this.id.nativeElement;
      idTextfield.focus();

      firebase.addOnPushTokenReceivedCallback(
        (token)=> {     
          console.log(token);   
          this.token = token;
        }
      )

    }




      showDatePicker() {
        this.router.navigate(["/datePicker"]);
      }

      confirm(){

          let parsedate = this.user.ambbgndt.toISOString().slice(0,10).replace(/-/g,"");
          let taiwanDate = Number(parsedate) -19110000;
         
           console.log(this.token);  
           console.log(taiwanDate);  
          let aa =  JSON.stringify({ambno: this.user.ambno, ambbgndt: "0"+taiwanDate, asrtype: "D2",ambemail: this.user.ambemail, ambaddr: "testName",atktokenid: this.token})
                  console.log(aa);              
                  
          fetchModule.fetch("http://122.146.168.11/AppRegister/api/ApplyforSend/SendForgottenPassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ambno: this.user.ambno, ambbgndt: "0"+taiwanDate, asrtype: "D2",ambemail: this.user.ambemail, ambaddr: "",atktokenid: this.token})
            })
            .then(function(response) {
                let toast = Toast.makeText("稍後寄出密碼通知");
                toast.show();
            }, function(error) {
                console.log(error);
            })



      }

       displayActionDialog(msg) {

          let options = { 
              message: msg,
              okButtonText: "確定"
          };
          dialogs.alert(options);
      }  
}

