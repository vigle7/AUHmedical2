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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViVmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJWaWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRTNELHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQUUvQix1QkFBMEIsNkJBQTZCLENBQUMsQ0FBQTtBQUN4RCxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFXckM7SUFJSSx5Q0FBeUM7SUFFekMsMEJBQW9CLFNBQW9CLEVBQVMsSUFBVTtRQU4vRCxpQkEyQkM7UUFyQnVCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSnBELFFBQUcsR0FBQyxFQUFFLENBQUM7UUFLViwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFRLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQzVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ0wsQ0FBQztJQUdELDJDQUFnQixHQUFoQixjQUFvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUM7SUFqQ2pEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsV0FBVyxFQUFFLDRCQUE0QjtTQUM1QyxDQUFDOzt3QkFBQTtJQWdDRix1QkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksd0JBQWdCLG1CQTJCNUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdiYXNpYy13ZWItdmlldy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvd2ViVmlldy93ZWJWaWV3Lmh0bWxcIixcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgdXJsPVwiXCI7XHJcbiAgICBwcml2YXRlIHNob3dXZWJWaWV3OmJvb2xlYW47XHJcbiAgICAvL0BWaWV3Q2hpbGQoXCJ3ZWJ2aWV3XCIpIHdlYnZpZXc6IFdlYlZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICAvLyB1c2Ugc3dpdGNoTWFwIHRvIGdldCB0aGUgbGF0ZXN0IGFjdGl2YXRlZFJvdXRlIGluc3RhbmNlXHJcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7ICB0aGlzLnVybCA9IHBhcmFtc1sndXJsJ10gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93V2ViVmlldyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICBsZXQgd2VidmlldzogV2ViVmlldyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxXZWJWaWV3PihcInd2XCIpO1xyXG4gICAgICAgIGlmICh3ZWJ2aWV3LmNhbkdvQmFjaykge1xyXG4gICAgICAgICAgICB3ZWJ2aWV3LmdvQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcGFnZUxvYWRlZEZpbmlzaCgpIHt0aGlzLnNob3dXZWJWaWV3ID0gdHJ1ZTt9XHJcblxyXG59XHJcbiJdfQ==