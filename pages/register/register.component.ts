import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DatePicker } from "ui/date-picker";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";

import {User} from "../../share/user"
import * as dialogs from "ui/dialogs";


@Component({
  selector: "register",
  templateUrl: "pages/register/register.html",
  styleUrls: ["pages/register/register.css"],
})
export class RegisterComponent implements OnInit {

    public user:User;
    public isDatePickerVisible:boolean = false;


    constructor(private router: Router,private page: Page) {

      this.user = new User();

    }

      ngOnInit() {
        this.page.actionBar.title = "申請會員";
             let firstTextfield: TextField = <TextField> this.page.getViewById("firstTextFieldId");
        firstTextfield.focus();
      }

     displayActionDialog() {

    let options = { 
        message: "請填入所有資料項目",
        okButtonText: "確定"
    };

    dialogs.alert(options);

    }

      enterDate() {
          let datePicker = this.page.getViewById<DatePicker>("datePicker");
          let selectedDate = new Date(datePicker.year, datePicker.month - 1, datePicker.day);
          this.user.ambbgndt = selectedDate;
          this.isDatePickerVisible = false;

      }

      showDatePicker() {
        let textFielsBDate = this.page.getViewById<TextField>("textFieldBDate");

        this.isDatePickerVisible = true;

        setTimeout(function(){
            textFielsBDate.dismissSoftInput();
        }, 100);

    }

      register(){

          if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
          }

          if(this.user.ambno==="" || this.user.ambemail==="" ){
              this.displayActionDialog();
              return
          }

        alert(this.user.ambemail);
          }

      cancel(){
        this.router.navigate(["/login"]);
      }

}