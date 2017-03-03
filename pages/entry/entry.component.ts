import { Component, ElementRef, OnInit, ViewChild,ViewContainerRef   } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from  "nativescript-angular/router";
import { Color } from "color";
import { TextField } from "ui/text-field";
import { View } from "ui/core/view";
import { Page } from "ui/page";

import dialogs = require("ui/dialogs");

import frameModule = require('ui/frame');
import pageModule = require('ui/page');
import webViewModule = require("ui/web-view");



//import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalViewComponent } from "./pageModal";

@Component({
  selector: "entry",
    templateUrl: "pages/entry/entry.html",
    //providers: [ModalDialogService],
    styleUrls: ["pages/entry/entry-common.css"],
})
export class EntryComponent implements OnInit {


  constructor(private router: Router, private page: Page) {

  }
//   constructor(private router: Router,private modalService: ModalDialogService,private vcRef: ViewContainerRef) {

//   }


    // createModelView() {
    //     let that = this;
    //     let currentDate = new Date();
    //     let options: ModalDialogOptions = {
    //         viewContainerRef: this.vcRef,
    //         context: "context",
    //         fullscreen: true
    //     };

    //     this.modalService.showModal(ModalViewComponent, options);
    
    // }


  ngOnInit() {
    //this.page.actionBarHidden = true;
    //this.page.backgroundImage = this.page.ios ? "res://homebg_ldpi_asia.png" : "res://homebg_ldpi_asia.png";
    this.page.actionBarHidden = true;

  }





}

