import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";

import { TextField } from "ui/text-field";
import { View } from "ui/core/view";

@Component({
  selector: "my-app",
  templateUrl: "app.html",
    styles: [
  `
  .submit-button {
    background-color: #CB1D00;
    color: white;
    margin-top: 20;
  }

  .btn{
      background-color: #F07788;
      color:whitesmoke;border-radius: 10;
      border-width: 2;
      border-color: #f6adb7;
      height:"50px";
  }
  `
  ]
})
export class AppComponent implements OnInit {


  constructor(private router: Router) {

  }

  ngOnInit() {
    //this.page.actionBarHidden = true;
    //this.page.backgroundImage = this.page.ios ? "res://homebg_ldpi_asia.png" : "res://homebg_ldpi_asia.png";
  }

  onTap(){
    this.router.navigate(["/login"]);
  }

}
