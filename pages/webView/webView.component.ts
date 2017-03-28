import {Component, OnInit,ViewChild } from "@angular/core";
import { WebView } from "ui/web-view";
import { Page } from "ui/page";
import { ActivatedRoute  } from "@angular/router";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";


@Component({
    selector: 'basic-web-view-component',
    templateUrl: "pages/webView/webView.html",
})




export class WebViewComponent implements OnInit {

    public url="";
    private showWebView:boolean;
    //@ViewChild("webview") webview: WebView;

  constructor(private pageRoute: PageRoute,private page: Page) {
    // use switchMap to get the latest activatedRoute instance
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params) => {  this.url = params['url'] });
  }

    ngOnInit() {
        this.showWebView = false;

      
    }

    goBack() {
        let webview: WebView = this.page.getViewById<WebView>("wv");
        if (webview.canGoBack) {
            webview.goBack();
        }
    }


    pageLoadedFinish() {this.showWebView = true;}

}

// import { Component,  OnInit } from "@angular/core";
// import { Router, ActivatedRoute  } from "@angular/router";

// import { Page } from "ui/page";

// import { WebView, LoadEventData } from "ui/web-view";

// import activityIndicatorModule = require("ui/activity-indicator");

// @Component({
//   selector: "webView",

//   templateUrl: "pages/webView/webView.html",

// })
// export class WebViewComponent implements OnInit {



//   public webviewsrc = "https://www.google.com";
//   private showWebView:boolean;

//   constructor(private route : ActivatedRoute ,  private page: Page) {

//   }

//   ngOnInit() {

//         this.showWebView = true;

//         let webview: WebView = this.page.getViewById<WebView>("wv");




//         console.log(this.route.params);
        
   
//   }



//   submit(arg){


      
//       switch(arg) {
//           case "依科別掛號":
//           this.showWebView = true;
//           this.webviewsrc = "http://61.66.117.197:2181/cmuh_apptest/category.php?locale=zh-Hant";
    
//               break;
//           case "依醫師掛號":
//           this.webviewsrc ="http://61.66.117.197:2181/cmuh_apptest/doctor_search.php?locale=zh-Hant";
//               break;
//           case "依歷史記錄掛號":
//           this.webviewsrc ="http://61.66.117.197:2181/cmuh_apptest/insert_user_id3.php?locale=zh-Hant";
//               break;
//           default:


//       }
//       //this.params.closeCallback();
//   }

// }
