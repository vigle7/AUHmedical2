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
