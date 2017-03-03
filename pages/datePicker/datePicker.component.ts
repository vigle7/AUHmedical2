import { Component, OnInit ,EventEmitter, Input, Output} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DatePicker } from "ui/date-picker";
import { Page } from "ui/page";
import {Observable} from 'rxjs/Rx';

import { Store } from '@ngrx/store';

import { SETDATE } from '../../reducer/datePickerReducer';


interface AppState {
 state : Date
}


@Component({
  selector: "cmuh-datePicker",
  templateUrl: "pages/datePicker/datePicker.html",
})
export class DatePickerComponent implements OnInit {

private datePicker:DatePicker;
private store$: Observable<Date>;
private currentDate: Date;

    constructor(private routerExtensions: RouterExtensions,private page: Page,private store: Store<AppState>) {

          this.store$ =  this.store.select('dateData');
          this.store$.take(1).subscribe(s => this.currentDate = s);

    }

      ngOnInit() {
          this.datePicker = this.page.getViewById<DatePicker>("datePicker");
          // this.datePicker.borderColor = "#198439";
          // this.datePicker.borderWidth = 5;
          // this.datePicker.borderRadius = 30;
          // this.datePicker.height = 300;
          this.datePicker.year=this.currentDate.getFullYear();
          this.datePicker.month=this.currentDate.getMonth()+1;
          this.datePicker.day=this.currentDate.getDate();
      }



      enterDate() {
          this.datePicker = this.page.getViewById<DatePicker>("datePicker");
          let selectedDate = new Date(this.datePicker.year, this.datePicker.month - 1, this.datePicker.day);
            selectedDate.setHours(selectedDate.getHours() + 8); //UTC

            console.log(selectedDate);

          this.store.dispatch({ type: SETDATE , payload: selectedDate});
          this.routerExtensions.backToPreviousPage();
      }


}