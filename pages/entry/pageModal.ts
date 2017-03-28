import { Component, OnInit, NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

//import pageModule = require('ui/page');
//import webViewModule = require("ui/web-view");
//import dialogs = require("ui/dialogs");
//import frameModule = require('ui/frame');

// >> passing-parameters
@Component({
  selector: "logpage",
    templateUrl: "pages/entry/pageModal.html",
    styleUrls: ["pages/entry/pageModal-common.css"],
})
export class ModalViewComponent implements OnInit {

    public myItems: Array<string>;
    private showLogin:boolean;

    //constructor(private params: ModalDialogParams, private page: Page) {}
     constructor(private router: Router,private page: Page) {}

    ngOnInit() {
        this.myItems = ["依科別掛號", "依醫師掛號","依歷史記錄掛號"];
        this.showLogin = true;
    }

    submit(arg){

    switch(arg) {
        case "依科別掛號":
        this.router.navigate(["/webView","http://61.66.117.197:2181/cmuh_apptest/category.php?locale=zh-Hant"]);
            break;
        case "依醫師掛號":
        this.router.navigate(["/webView","http://61.66.117.197:2181/cmuh_apptest/doctor_search.php?locale=zh-Hant"]);
            break;
        case "依歷史記錄掛號":
        this.router.navigate(["/webView","http://61.66.117.197:2181/cmuh_apptest/insert_user_id3.php?locale=zh-Hant"]);
            break;
        default:

    }
    //this.params.closeCallback();
}

    // factoryFunc = (url)=>{
    //             return ()=> {
    //             var webView = new webViewModule.WebView();
    //             webView.url = url;
                
    //             var page = new pageModule.Page();
    //             page.content = webView;
    //             return page;
    //             }};

    // submit(arg){
        
    //     switch(arg) {
    //         case "依科別掛號":
    //             this.showLogin = false;
    //             frameModule.topmost().navigate(this.factoryFunc("http://61.66.117.197:2181/cmuh_apptest/category.php?locale=zh-Hant"));
    //             break;
    //         case "依醫師掛號":
    //             frameModule.topmost().navigate(this.factoryFunc("http://61.66.117.197:2181/cmuh_apptest/doctor_search.php?locale=zh-Hant"));
    //             break;
    //         case "依歷史記錄掛號":
    //             frameModule.topmost().navigate(this.factoryFunc("http://61.66.117.197:2181/cmuh_apptest/insert_user_id3.php?locale=zh-Hant"));
    //             break;
    //         default:


    //     }
    // }

}