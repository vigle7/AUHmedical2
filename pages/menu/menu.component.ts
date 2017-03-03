import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import tabViewModule = require("ui/tab-view");
import { Page } from "ui/page";

@Component({
  selector: "menu",

  templateUrl: "pages/menu/menu.html",
  styleUrls: ["pages/menu/menu-common.css"],
})
export class MenuComponent implements OnInit {

  private showButton1:boolean;

  constructor(private router: Router,  private page: Page) {

  }

  ngOnInit() {
        this.showButton1 = false;
  }



}
