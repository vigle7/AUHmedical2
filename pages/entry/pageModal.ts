import { Component, OnInit, NgModule } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { DatePicker } from "ui/date-picker";
import { Page } from "ui/page";

import pageModule = require('ui/page');
import webViewModule = require("ui/web-view");
import dialogs = require("ui/dialogs");
import frameModule = require('ui/frame');

// >> passing-parameters
@Component({
  selector: "logpage",
    templateUrl: "pages/entry/pageModal.html",
    styleUrls: ["pages/entry/pageModal-common.css"],
})
export class ModalViewComponent implements OnInit {

    public myItems: Array<string>;

    //constructor(private params: ModalDialogParams, private page: Page) {}
     constructor(private page: Page) {}

    ngOnInit() {
        this.myItems = ["依科別掛號", "依醫師掛號","依歷史記錄掛號"];
    }

    factoryFunc = (url)=>{
                return ()=> {
                var webView = new webViewModule.WebView();
                webView.url = url;
                var page = new pageModule.Page();
                page.content = webView;
                return page;
                }};

    submit(arg){
        
        switch(arg) {
            case "依科別掛號":
                frameModule.topmost().navigate(this.factoryFunc("http://61.66.117.197:2181/cmuh_apptest/category.php?locale=zh-Hant"));
                break;
            case "依醫師掛號":
                frameModule.topmost().navigate(this.factoryFunc("http://61.66.117.197:2181/cmuh_apptest/doctor_search.php?locale=zh-Hant"));
                break;
            case "依歷史記錄掛號":
                frameModule.topmost().navigate(this.factoryFunc("http://61.66.117.197:2181/cmuh_apptest/insert_user_id3.php?locale=zh-Hant"));
                break;
            default:


        }
        //this.params.closeCallback();
    }

}