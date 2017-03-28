"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var WebViewComponent = (function () {
    //@ViewChild("webview") webview: WebView;
    function WebViewComponent(pageRoute, page) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.page = page;
        this.url = "";
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.url = params['url']; });
    }
    WebViewComponent.prototype.ngOnInit = function () {
        this.showWebView = false;
    };
    WebViewComponent.prototype.goBack = function () {
        var webview = this.page.getViewById("wv");
        if (webview.canGoBack) {
            webview.goBack();
        }
    };
    WebViewComponent.prototype.pageLoadedFinish = function () { this.showWebView = true; };
    WebViewComponent = __decorate([
        core_1.Component({
            selector: 'basic-web-view-component',
            templateUrl: "pages/webView/webView.html",
        }), 
        __metadata('design:paramtypes', [router_1.PageRoute, page_1.Page])
    ], WebViewComponent);
    return WebViewComponent;
}());
exports.WebViewComponent = WebViewComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViVmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJWaWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRTNELHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQUUvQix1QkFBMEIsNkJBQTZCLENBQUMsQ0FBQTtBQUN4RCxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFXckM7SUFJSSx5Q0FBeUM7SUFFM0MsMEJBQW9CLFNBQW9CLEVBQVMsSUFBVTtRQU43RCxpQkE2QkM7UUF2QnFCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSmxELFFBQUcsR0FBQyxFQUFFLENBQUM7UUFLZCwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFRLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVDLG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUc3QixDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQzVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ0wsQ0FBQztJQUdELDJDQUFnQixHQUFoQixjQUFvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUM7SUFuQ2pEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsV0FBVyxFQUFFLDRCQUE0QjtTQUM1QyxDQUFDOzt3QkFBQTtJQWtDRix1QkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3Qlksd0JBQWdCLG1CQTZCNUIsQ0FBQTtBQUVELHNEQUFzRDtBQUN0RCw2REFBNkQ7QUFFN0Qsa0NBQWtDO0FBRWxDLHdEQUF3RDtBQUV4RCxxRUFBcUU7QUFFckUsZUFBZTtBQUNmLHlCQUF5QjtBQUV6QiwrQ0FBK0M7QUFFL0MsS0FBSztBQUNMLG9EQUFvRDtBQUlwRCxrREFBa0Q7QUFDbEQsaUNBQWlDO0FBRWpDLHdFQUF3RTtBQUV4RSxNQUFNO0FBRU4saUJBQWlCO0FBRWpCLG1DQUFtQztBQUVuQyx1RUFBdUU7QUFLdkUsMENBQTBDO0FBRzFDLE1BQU07QUFJTixpQkFBaUI7QUFJakIsc0JBQXNCO0FBQ3RCLDBCQUEwQjtBQUMxQixxQ0FBcUM7QUFDckMsb0dBQW9HO0FBRXBHLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2Qiw0QkFBNEI7QUFDNUIsMEdBQTBHO0FBQzFHLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFHckIsVUFBVTtBQUNWLHVDQUF1QztBQUN2QyxNQUFNO0FBRU4sSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdiYXNpYy13ZWItdmlldy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvd2ViVmlldy93ZWJWaWV3Lmh0bWxcIixcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgdXJsPVwiXCI7XHJcbiAgICBwcml2YXRlIHNob3dXZWJWaWV3OmJvb2xlYW47XHJcbiAgICAvL0BWaWV3Q2hpbGQoXCJ3ZWJ2aWV3XCIpIHdlYnZpZXc6IFdlYlZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUscHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICAvLyB1c2Ugc3dpdGNoTWFwIHRvIGdldCB0aGUgbGF0ZXN0IGFjdGl2YXRlZFJvdXRlIGluc3RhbmNlXHJcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxyXG4gICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4geyAgdGhpcy51cmwgPSBwYXJhbXNbJ3VybCddIH0pO1xyXG4gIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNob3dXZWJWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgbGV0IHdlYnZpZXc6IFdlYlZpZXcgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8V2ViVmlldz4oXCJ3dlwiKTtcclxuICAgICAgICBpZiAod2Vidmlldy5jYW5Hb0JhY2spIHtcclxuICAgICAgICAgICAgd2Vidmlldy5nb0JhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBhZ2VMb2FkZWRGaW5pc2goKSB7dGhpcy5zaG93V2ViVmlldyA9IHRydWU7fVxyXG5cclxufVxyXG5cclxuLy8gaW1wb3J0IHsgQ29tcG9uZW50LCAgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy8gaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSAgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbi8vIGltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcclxuXHJcbi8vIGltcG9ydCBhY3Rpdml0eUluZGljYXRvck1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIik7XHJcblxyXG4vLyBAQ29tcG9uZW50KHtcclxuLy8gICBzZWxlY3RvcjogXCJ3ZWJWaWV3XCIsXHJcblxyXG4vLyAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3dlYlZpZXcvd2ViVmlldy5odG1sXCIsXHJcblxyXG4vLyB9KVxyXG4vLyBleHBvcnQgY2xhc3MgV2ViVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuXHJcbi8vICAgcHVibGljIHdlYnZpZXdzcmMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb21cIjtcclxuLy8gICBwcml2YXRlIHNob3dXZWJWaWV3OmJvb2xlYW47XHJcblxyXG4vLyAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGUgOiBBY3RpdmF0ZWRSb3V0ZSAsICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHJcbi8vICAgfVxyXG5cclxuLy8gICBuZ09uSW5pdCgpIHtcclxuXHJcbi8vICAgICAgICAgdGhpcy5zaG93V2ViVmlldyA9IHRydWU7XHJcblxyXG4vLyAgICAgICAgIGxldCB3ZWJ2aWV3OiBXZWJWaWV3ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFdlYlZpZXc+KFwid3ZcIik7XHJcblxyXG5cclxuXHJcblxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGUucGFyYW1zKTtcclxuICAgICAgICBcclxuICAgXHJcbi8vICAgfVxyXG5cclxuXHJcblxyXG4vLyAgIHN1Ym1pdChhcmcpe1xyXG5cclxuXHJcbiAgICAgIFxyXG4vLyAgICAgICBzd2l0Y2goYXJnKSB7XHJcbi8vICAgICAgICAgICBjYXNlIFwi5L6d56eR5Yil5o6b6JmfXCI6XHJcbi8vICAgICAgICAgICB0aGlzLnNob3dXZWJWaWV3ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgIHRoaXMud2Vidmlld3NyYyA9IFwiaHR0cDovLzYxLjY2LjExNy4xOTc6MjE4MS9jbXVoX2FwcHRlc3QvY2F0ZWdvcnkucGhwP2xvY2FsZT16aC1IYW50XCI7XHJcbiAgICBcclxuLy8gICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgIGNhc2UgXCLkvp3phqvluKvmjpvomZ9cIjpcclxuLy8gICAgICAgICAgIHRoaXMud2Vidmlld3NyYyA9XCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9kb2N0b3Jfc2VhcmNoLnBocD9sb2NhbGU9emgtSGFudFwiO1xyXG4vLyAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgY2FzZSBcIuS+neatt+WPsuiomOmMhOaOm+iZn1wiOlxyXG4vLyAgICAgICAgICAgdGhpcy53ZWJ2aWV3c3JjID1cImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L2luc2VydF91c2VyX2lkMy5waHA/bG9jYWxlPXpoLUhhbnRcIjtcclxuLy8gICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG5cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAvL3RoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcclxuLy8gICB9XHJcblxyXG4vLyB9XHJcbiJdfQ==