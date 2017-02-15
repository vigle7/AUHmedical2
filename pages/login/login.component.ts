import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { View } from "ui/core/view";



@Component({
  selector: "login",

  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class LoginComponent implements OnInit {





  constructor(private router: Router,  private page: Page) {

  }

  ngOnInit() {
    //this.page.actionBarHidden = true;
    //this.page.backgroundImage = this.page.ios ? "res://homebg_ldpi_asia.png" : "res://homebg_ldpi_asia.png";
  }

  join() {
    this.router.navigate(["/entry"]);
  }


  login() {

  }
  
  disable(){
    this.router.navigate(["/entry"]);
  }


}
