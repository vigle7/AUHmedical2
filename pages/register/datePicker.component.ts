import { Component, OnInit ,EventEmitter, Input, Output} from "@angular/core";
import { Router } from "@angular/router";
import { DatePicker } from "ui/date-picker";
import { Page } from "ui/page";
import {User} from "../../share/user"
import * as dialogs from "ui/dialogs";


@Component({
  selector: "cmuh-datePicker",
  templateUrl: "pages/datePicker/datePicker.html",
})
export class DatePickerComponent implements OnInit {

  @Input()  date: Date;
  @Output() onConfirm = new EventEmitter<Date>();

    constructor(private page: Page) {

    }

      ngOnInit() {
        this.page.actionBar.title = "申請會員";

      }



      enterDate() {
          let datePicker = this.page.getViewById<DatePicker>("datePicker");
          let selectedDate = new Date(datePicker.year, datePicker.month - 1, datePicker.day);
          this.user.ambbgndt = selectedDate;

      }


  onClick() {
  	          let datePicker = this.page.getViewById<DatePicker>("datePicker");
          let selectedDate = new Date(datePicker.year, datePicker.month - 1, datePicker.day);
    this.onConfirm.emit(selectedDate);
    this.voted = true;
  }


}