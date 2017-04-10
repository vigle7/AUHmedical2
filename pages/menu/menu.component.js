"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var observable = require("data/observable");
var angular_1 = require('nativescript-telerik-ui-pro/sidedrawer/angular');
var sidedrawer_1 = require('nativescript-telerik-ui-pro/sidedrawer');
var Toast = require("nativescript-toast");
var fetchModule = require("fetch");
var MenuComponent = (function () {
    //@ViewChild("sideDrawer") sideDrawer: ElementRef;
    function MenuComponent(router, page, changeDetectionRef) {
        this.router = router;
        this.page = page;
        this.changeDetectionRef = changeDetectionRef;
        this.showButtonArray = [false, false, false, false, false, false, false, false, false, false, false, false, false];
        this.member = new observable.Observable();
        this.authResult = global.loginResponse.authResult;
        page.on("loaded", this.onLoaded, this);
    }
    Object.defineProperty(MenuComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.toggle = function () {
        this.drawer.toggleDrawerState();
    };
    MenuComponent.prototype.onLoaded = function (args) {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showWebView = false;
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this.drawer.closeDrawer();
            }
        });
        if (global.loginResponse.accountName === '') {
            this.member.set("name", '');
            this.signOutBtn.nativeElement.visibility = 'collapsed';
            this.signInBtn.nativeElement.visibility = 'visible';
        }
        else {
            this.member.set("name", global.loginResponse.accountName + '  您好');
            this.signOutBtn.nativeElement.visibility = 'visible';
            this.signInBtn.nativeElement.visibility = 'collapsed';
        }
        this.member.addEventListener(observable.Observable.propertyChangeEvent, function (pcd) {
            if (_this.member.name === '') {
                _this.actionItem.nativeElement.text = '';
                _this.signOutBtn.nativeElement.visibility = 'collapsed';
                _this.signInBtn.nativeElement.visibility = 'visible';
                return;
            }
            else {
                _this.member.set("name", global.loginResponse.accountName + '  您好');
                _this.signOutBtn.nativeElement.visibility = 'visible';
                _this.signInBtn.nativeElement.visibility = 'collapsed';
            }
        });
    };
    MenuComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    };
    MenuComponent.prototype.submit = function (arg) {
        this.hospaliasno = 22;
        switch (arg) {
            case "依科別掛號":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/category.php?locale=zh-Hant"]);
                break;
            case "依醫師掛號":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/doctor_search.php?locale=zh-Hant"]);
                break;
            case "依歷史記錄掛號":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/insert_user_id3.php?locale=zh-Hant"]);
                break;
            case "掛號查詢或取消":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/insert_user_id2.php?title=預約掛號查詢&nextLink=query_register.php"]);
                break;
            case "其它進度查詢":
                this.router.navigate(["/webView", "http://61.66.117.88/WPAppWebQuery/WForscheduleqry.aspx"]);
                break;
            case "依診間查看診進度":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/insert_user_id4.php?title=看診進度&nextLink=progress4.php&locale=zh-Hant"]);
                break;
            case "依病人查看診進度":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/insert_user_id2.php?title=查詢診號&nextLink=progress.php"]);
                break;
            case "健康新知":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=2&hospaliasno=" + this.hospaliasno)]);
                break;
            case "醫院新訊":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=3&hospaliasno=" + this.hospaliasno)]);
                break;
            case "醫師介紹":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=4&hospaliasno=" + this.hospaliasno)]);
                break;
            case "西藥服務":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFDrugMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=1&hospaliasno=" + this.hospaliasno)]);
                break;
            case "中藥服務":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFDrugMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=2&hospaliasno=" + this.hospaliasno)]);
                break;
            case "中亞健康網":
                this.router.navigate(["/webView", ("http://www.ca2-health.com/?FM=1&hospaliasno=" + this.hospaliasno)]);
                break;
            case "衛教單張":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFInstructionsQry.aspx?hospaliasno=" + this.hospaliasno)]);
                break;
            case "影音衛教搜尋":
                this.router.navigate(["/webView", "http://61.66.117.66/MultiMediaHealthEducation/VideoDataBaseApp.aspx"]);
                break;
            case "各科介紹":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/reference.php"]);
                break;
            case "免費保健":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=1&hospaliasno=" + this.hospaliasno)]);
                break;
            case "保健講座":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=5&hospaliasno=" + this.hospaliasno)]);
                break;
            case "我的用藥":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFDrugQryMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "就診前記錄":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFPreRecordMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "我的檢驗":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFLabQryMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "家人用藥":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFDrugRecord.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno + "2&role=1")]);
                break;
            case "家人衛教":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFInstructionMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&role=1&hospaliasno=" + this.hospaliasno)]);
                break;
            case "就醫行事曆":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFScheduleMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "我的衛教":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFInstructionMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "加入會員":
                if (global.loginResponse.authResult != '0') {
                    this.toast = Toast.makeText("請先登出會員");
                    this.toast.show();
                    return;
                }
                this.router.navigate(["/consent"]);
                break;
            case "血壓":
                this.router.navigate(["/webView", ("http://61.66.117.88/HealthManage/Home/Index/" + global.loginResponse.accoutMemberNo + "/1")]);
                break;
            case "血糖":
                this.router.navigate(["/webView", ("http://61.66.117.88/HealthManage/Home/Index/" + global.loginResponse.accoutMemberNo + "/2")]);
                break;
            case "BMI":
                this.router.navigate(["/webView", ("http://61.66.117.88/HealthManage/Home/Index/" + global.loginResponse.accoutMemberNo + "/3")]);
                break;
            case "登出":
                this.member.set("name", '');
                global.loginResponse.accountName = '';
                global.loginResponse.authResult = '0';
                this.drawer.closeDrawer();
                this.toast = Toast.makeText("登出成功");
                this.toast.show();
                break;
            case "我的訊息":
                alert(global.loginResponse.tokenid);
                if (global.loginResponse.authResult == '0') {
                    this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNotificationMessage.aspx?tokentype=D2&tokenid=" + global.loginResponse.tokenid + "&hospaliasno=22&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh")]);
                }
                else {
                    this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNotificationMessage.aspx?tokentype=D2&tokenid=" + global.loginResponse.tokenid + "&memberno=" + global.loginResponse.accoutMemberNo + "&hospaliasno=22&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh")]);
                }
                break;
            case "設定":
                console.log(global.loginResponse.tokenid);
                this.router.navigate(["/webView", ("<!DOCTYPE html>\n                                            <html>\n                                                <head>\n                                                    <meta charset=\"utf-8\" />\n                                                </head>\n                                            <body> \n                                            <form name=\"f\" action=\"http://61.66.117.88/WPAppWebQuery/WFMemberSet.aspx\" method=\"POST\"  >\n                                                <input type=\"hidden\"  value=" + global.loginResponse.member_id + "     name= \"member_id\" >\n                                                <input type=\"hidden\"  value=" + global.loginResponse.member_passwd + "   name= \"member_passwd\" >\n                                                <input type=\"hidden\"  value=\"22\"     name= \"hospaliasno\" >\n                                                <input type=\"hidden\"  value=\"D2\"   name= \"tokentype\" >\n                                                <input type=\"hidden\"  value=\"appmobile_cmuh\"   name= \"WSPassword\" >\n                                                <input type=\"hidden\"  value=\"cmuh_appmobile\"     name= \"WSuserid\" >\n                                                <input type=\"hidden\"  value=" + global.loginResponse.tokenid + "   name= \"tokenid\" >\n                                            </form>\n                                            <script type= \"text/javascript\">\n                                            document.forms[\"f\"].submit();\n                                            </script>\n\n                                            </body>\n                                            </html>")]);
                break;
            default:
        }
    };
    MenuComponent.prototype.showButton = function (idx) {
        if (idx === 9 || idx === 10 || idx === 11 || idx === 12) {
            if (global.loginResponse.authResult === '0') {
                this.toast = Toast.makeText("請先登入會員");
                this.toast.show();
                return;
            }
        }
        for (var i = 0; i < this.showButtonArray.length; i++) {
            if (i === idx) {
                this.showButtonArray[i] = !this.showButtonArray[i];
            }
            else {
                this.showButtonArray[i] = false;
            }
        }
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], MenuComponent.prototype, "drawerComponent", void 0);
    __decorate([
        core_1.ViewChild("actionItem"), 
        __metadata('design:type', core_1.ElementRef)
    ], MenuComponent.prototype, "actionItem", void 0);
    __decorate([
        core_1.ViewChild("signOutBtn"), 
        __metadata('design:type', core_1.ElementRef)
    ], MenuComponent.prototype, "signOutBtn", void 0);
    __decorate([
        core_1.ViewChild("signInBtn"), 
        __metadata('design:type', core_1.ElementRef)
    ], MenuComponent.prototype, "signInBtn", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: "menu",
            templateUrl: "pages/menu/menu.html",
            styleUrls: ["pages/menu/menu-common.css"],
        }),
        __param(1, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page, core_1.ChangeDetectorRef])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWtHLGVBQWUsQ0FBQyxDQUFBO0FBQ2xILHVCQUFzQyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3hELHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3QixJQUFPLFVBQVUsV0FBVyxpQkFBaUIsQ0FBQyxDQUFDO0FBQy9DLHdCQUFxRCxnREFBZ0QsQ0FBQyxDQUFBO0FBQ3RHLDJCQUEyRCx3Q0FBd0MsQ0FBQyxDQUFBO0FBRXBHLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzVDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQVFyQztJQW9CQSxrREFBa0Q7SUFFaEQsdUJBQW9CLE1BQWMsRUFBeUIsSUFBVSxFQUMzRCxrQkFBcUM7UUFEM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzNELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFadkMsb0JBQWUsR0FBZ0IsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUUsQ0FBQztRQU1oSCxXQUFNLEdBQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekMsZUFBVSxHQUFVLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBTTFELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdELHNCQUFXLCtDQUFvQjthQUEvQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQWtDQztRQWhDSyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxzQkFBYSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM5QixDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUEsQ0FBRSxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsS0FBRyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUMsV0FBVyxDQUFDO1lBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBQyxTQUFTLENBQUM7UUFDdEQsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBQyxTQUFTLENBQUM7WUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFDLFdBQVcsQ0FBQztRQUV4RCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFHLFVBQUMsR0FBa0M7WUFDeEcsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFDLFdBQVcsQ0FBQztnQkFDckQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFDLFNBQVMsQ0FBQztnQkFDbEQsTUFBTSxDQUFBO1lBQ1YsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFDLFNBQVMsQ0FBQztnQkFDbkQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFDLFdBQVcsQ0FBQztZQUN4RCxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFFVCxDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sR0FBRztRQUVOLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXRCLE1BQU0sQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFVCxLQUFLLE9BQU87Z0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsb0VBQW9FLENBQUMsQ0FBQyxDQUFDO2dCQUNwRyxLQUFLLENBQUM7WUFDVixLQUFLLE9BQU87Z0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMseUVBQXlFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RyxLQUFLLENBQUM7WUFDVixLQUFLLFNBQVM7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsMkVBQTJFLENBQUMsQ0FBQyxDQUFDO2dCQUMzRyxLQUFLLENBQUM7WUFFVixLQUFLLFNBQVM7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMscUdBQXFHLENBQUMsQ0FBQyxDQUFDO2dCQUNySSxLQUFLLENBQUM7WUFFVixLQUFLLFFBQVE7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO2dCQUN4RixLQUFLLENBQUM7WUFDVixLQUFLLFVBQVU7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsNkdBQTZHLENBQUMsQ0FBQyxDQUFDO2dCQUM3SSxLQUFLLENBQUM7WUFDVixLQUFLLFVBQVU7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsNkZBQTZGLENBQUMsQ0FBQyxDQUFDO2dCQUM3SCxLQUFLLENBQUM7WUFFVixLQUFLLE1BQU07Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsNEhBQXlILElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNLLEtBQUssQ0FBQztZQUNWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyw0SEFBeUgsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0ssS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLDRIQUF5SCxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzSyxLQUFLLENBQUM7WUFFVixLQUFLLE1BQU07Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsNEhBQXlILElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNLLEtBQUssQ0FBQztZQUNWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyw0SEFBeUgsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0ssS0FBSyxDQUFDO1lBRVYsS0FBSyxPQUFPO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLGtEQUErQyxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRyxLQUFLLENBQUM7WUFDVixLQUFLLE1BQU07Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsMkVBQXdFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFILEtBQUssQ0FBQztZQUNWLEtBQUssUUFBUTtnQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxxRUFBcUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JHLEtBQUssQ0FBQztZQUVWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxzREFBc0QsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLEtBQUssQ0FBQztZQUVWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyw0SEFBeUgsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0ssS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLDRIQUF5SCxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzSyxLQUFLLENBQUM7WUFFVixLQUFLLE1BQU07Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsb0VBQWlFLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyx1RUFBa0UsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDeE4sS0FBSyxDQUFDO1lBQ1YsS0FBSyxPQUFPO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHNFQUFtRSxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsdUVBQWtFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFOLEtBQUssQ0FBQztZQUNWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxtRUFBZ0UsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLHVFQUFrRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2TixLQUFLLENBQUM7WUFFVixLQUFLLE1BQU07Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsbUVBQWdFLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyx1RUFBa0UsSUFBSSxDQUFDLFdBQVcsY0FBVSxDQUFDLENBQUMsQ0FBQztnQkFDL04sS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHdFQUFxRSxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsOEVBQXlFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25PLEtBQUssQ0FBQztZQUVWLEtBQUssT0FBTztnQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxxRUFBa0UsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLHVFQUFrRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6TixLQUFLLENBQUM7WUFDVixLQUFLLE1BQU07Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsd0VBQXFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyx1RUFBa0UsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDNU4sS0FBSyxDQUFDO1lBRVYsS0FBSyxNQUFNO2dCQUNQLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDbEIsTUFBTSxDQUFBO2dCQUFBLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLENBQUM7WUFFVixLQUFLLElBQUk7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsa0RBQStDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxRQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0SCxLQUFLLENBQUM7WUFDVixLQUFLLElBQUk7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsa0RBQStDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxRQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0SCxLQUFLLENBQUM7WUFDVixLQUFLLEtBQUs7Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsa0RBQStDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxRQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0SCxLQUFLLENBQUM7WUFFVixLQUFLLElBQUk7Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNsQixLQUFLLENBQUM7WUFDVixLQUFLLE1BQU07Z0JBQ1gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHdGQUFxRixNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sdUVBQW1FLENBQUMsQ0FBQyxDQUFDO2dCQUFBLENBQUM7Z0JBQzNOLElBQUksQ0FBQSxDQUFDO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHdGQUFxRixNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sa0JBQWEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLHVFQUFtRSxDQUFDLENBQUMsQ0FBQztnQkFBQSxDQUFDO2dCQUN2USxLQUFLLENBQUM7WUFDVixLQUFLLElBQUk7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyw4aEJBT21DLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxrSEFDOUIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLDBrQkFLbEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLGlaQU90RCxDQUFDLENBQUMsQ0FBQztnQkFDekMsS0FBSyxDQUFDO1lBT1YsUUFBUTtRQUVaLENBQUM7SUFFTCxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEdBQUc7UUFFVixFQUFFLENBQUEsQ0FBQyxHQUFHLEtBQUcsQ0FBQyxJQUFFLEdBQUcsS0FBRyxFQUFFLElBQUUsR0FBRyxLQUFHLEVBQUUsSUFBRSxHQUFHLEtBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUN0QyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsS0FBRyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQTtZQUNSLENBQUM7UUFDUCxDQUFDO1FBRUQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzNDLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBRyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUNSLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFqUUQ7UUFBQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzswREFBQTtJQUNsQztRQUFDLGdCQUFTLENBQUMsWUFBWSxDQUFDOztxREFBQTtJQUN4QjtRQUFDLGdCQUFTLENBQUMsWUFBWSxDQUFDOztxREFBQTtJQUN4QjtRQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDOztvREFBQTtJQVh6QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUVoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7bUJBdUJzQyxhQUFNLENBQUMsV0FBSSxDQUFDOztxQkF2QmxEO0lBMFFGLG9CQUFDO0FBQUQsQ0FBQyxBQXpRRCxJQXlRQztBQXpRWSxxQkFBYSxnQkF5UXpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdCwgT25Jbml0LCBBZnRlclZpZXdJbml0ICxFbGVtZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHRhYlZpZXdNb2R1bGUgPSByZXF1aXJlKFwidWkvdGFiLXZpZXdcIik7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IG9ic2VydmFibGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZX0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL3NpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQge0RyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9ufSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS1wcm8vc2lkZWRyYXdlcic7XG5cbmNvbnN0IFRvYXN0ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b2FzdFwiKTtcbmNvbnN0IGZldGNoTW9kdWxlID0gcmVxdWlyZShcImZldGNoXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWVudVwiLFxuXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21lbnUvbWVudS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbWVudS9tZW51LWNvbW1vbi5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKFwiYWN0aW9uSXRlbVwiKSBhY3Rpb25JdGVtOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic2lnbk91dEJ0blwiKSBzaWduT3V0QnRuOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic2lnbkluQnRuXCIpIHNpZ25JbkJ0bjogRWxlbWVudFJlZjtcbiAgXG5cbiAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuICBwcml2YXRlIGRyYXdlcjogU2lkZURyYXdlclR5cGU7XG5cbiAgcHJpdmF0ZSBzaG93QnV0dG9uQXJyYXk6QXJyYXk8Ym9vbGVhbj49W2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNl44CAXTtcblxuICBwcml2YXRlIHNob3dXZWJWaWV3OmJvb2xlYW47XG4gIHByaXZhdGUgaG9zcGFsaWFzbm86bnVtYmVyO1xuICBwcml2YXRlIHRvYXN0OmFueTtcblxuICBwcml2YXRlIG1lbWJlcjphbnkgPSBuZXcgb2JzZXJ2YWJsZS5PYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgYXV0aFJlc3VsdDpzdHJpbmcgPSBnbG9iYWwubG9naW5SZXNwb25zZS5hdXRoUmVzdWx0O1xuXG4vL0BWaWV3Q2hpbGQoXCJzaWRlRHJhd2VyXCIpIHNpZGVEcmF3ZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgIEBJbmplY3QoUGFnZSkgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHBhZ2Uub24oXCJsb2FkZWRcIiwgdGhpcy5vbkxvYWRlZCwgdGhpcyk7XG4gIH1cblxuICBcbiAgcHVibGljIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICB9XG4gIFxuICBwdWJsaWMgdG9nZ2xlKCkge1xuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxuICBwdWJsaWMgb25Mb2FkZWQoYXJncykge1xuICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuc2hvd1dlYlZpZXcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIGdsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291bnROYW1lPT09Jycpey8v5pyq55m75YWl5pyD5ZOhXG4gICAgICAgICAgICB0aGlzLm1lbWJlci5zZXQoXCJuYW1lXCIsICcnKTtcbiAgICAgICAgICAgIHRoaXMuc2lnbk91dEJ0bi5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHk9J2NvbGxhcHNlZCc7XG4gICAgICAgICAgICB0aGlzLnNpZ25JbkJ0bi5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHk9J3Zpc2libGUnO1xuICAgICAgICB9ZWxzZXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lt7LnmbvlhaXmnIPlk6FcbiAgICAgICAgICAgIHRoaXMubWVtYmVyLnNldChcIm5hbWVcIiwgZ2xvYmFsLmxvZ2luUmVzcG9uc2UuYWNjb3VudE5hbWUrJyAg5oKo5aW9Jyk7XG4gICAgICAgICAgICB0aGlzLnNpZ25PdXRCdG4ubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5PSd2aXNpYmxlJztcbiAgICAgICAgICAgIHRoaXMuc2lnbkluQnRuLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eT0nY29sbGFwc2VkJztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tZW1iZXIuYWRkRXZlbnRMaXN0ZW5lcihvYnNlcnZhYmxlLk9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCwgIChwY2Q6IG9ic2VydmFibGUuUHJvcGVydHlDaGFuZ2VEYXRhKT0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMubWVtYmVyLm5hbWU9PT0nJyl7IC8v55m75Ye65pyD5ZOhXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25JdGVtLm5hdGl2ZUVsZW1lbnQudGV4dCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2lnbk91dEJ0bi5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHk9J2NvbGxhcHNlZCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWduSW5CdG4ubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5PSd2aXNpYmxlJztcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMubWVtYmVyLnNldChcIm5hbWVcIiwgZ2xvYmFsLmxvZ2luUmVzcG9uc2UuYWNjb3VudE5hbWUrJyAg5oKo5aW9Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWduT3V0QnRuLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eT0ndmlzaWJsZSc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWduSW5CdG4ubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5PSdjb2xsYXBzZWQnO1xuICAgICAgICAgICAgfVxuICAgICBcbiAgICAgICAgfSk7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc3VibWl0KGFyZyl7XG5cbiAgICAgIHRoaXMuaG9zcGFsaWFzbm8gPSAyMjtcblxuICAgICAgc3dpdGNoKGFyZykge1xuXG4gICAgICAgICAgY2FzZSBcIuS+neenkeWIpeaOm+iZn1wiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9jYXRlZ29yeS5waHA/bG9jYWxlPXpoLUhhbnRcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi5L6d6Yar5bir5o6b6JmfXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L2RvY3Rvcl9zZWFyY2gucGhwP2xvY2FsZT16aC1IYW50XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuS+neatt+WPsuiomOmMhOaOm+iZn1wiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9pbnNlcnRfdXNlcl9pZDMucGhwP2xvY2FsZT16aC1IYW50XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwi5o6b6Jmf5p+l6Kmi5oiW5Y+W5raIXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L2luc2VydF91c2VyX2lkMi5waHA/dGl0bGU96aCQ57SE5o6b6Jmf5p+l6KmiJm5leHRMaW5rPXF1ZXJ5X3JlZ2lzdGVyLnBocFwiXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIuWFtuWug+mAsuW6puafpeipolwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZvcnNjaGVkdWxlcXJ5LmFzcHhcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi5L6d6Ki66ZaT5p+l55yL6Ki66YCy5bqmXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L2luc2VydF91c2VyX2lkNC5waHA/dGl0bGU955yL6Ki66YCy5bqmJm5leHRMaW5rPXByb2dyZXNzNC5waHAmbG9jYWxlPXpoLUhhbnRcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi5L6d55eF5Lq65p+l55yL6Ki66YCy5bqmXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L2luc2VydF91c2VyX2lkMi5waHA/dGl0bGU95p+l6Kmi6Ki66JmfJm5leHRMaW5rPXByb2dyZXNzLnBocFwiXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIuWBpeW6t+aWsOefpVwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsYGh0dHA6Ly82MS42Ni4xMTcuODgvV1BBcHBXZWJRdWVyeS9XRk5ld3NNYWluLmFzcHg/V1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZmdW49MiZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi6Yar6Zmi5paw6KiKXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGTmV3c01haW4uYXNweD9XU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmZ1bj0zJmhvc3BhbGlhc25vPSR7dGhpcy5ob3NwYWxpYXNub31gXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLphqvluKvku4vntLlcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZOZXdzTWFpbi5hc3B4P1dTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWgmZnVuPTQmaG9zcGFsaWFzbm89JHt0aGlzLmhvc3BhbGlhc25vfWBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwi6KW/6Jel5pyN5YuZXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGRHJ1Z01haW4uYXNweD9XU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmZ1bj0xJmhvc3BhbGlhc25vPSR7dGhpcy5ob3NwYWxpYXNub31gXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLkuK3ol6XmnI3li5lcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZEcnVnTWFpbi5hc3B4P1dTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWgmZnVuPTImaG9zcGFsaWFzbm89JHt0aGlzLmhvc3BhbGlhc25vfWBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwi5Lit5Lqe5YGl5bq357ayXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovL3d3dy5jYTItaGVhbHRoLmNvbS8/Rk09MSZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi6KGb5pWZ5Zau5by1XCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGSW5zdHJ1Y3Rpb25zUXJ5LmFzcHg/aG9zcGFsaWFzbm89JHt0aGlzLmhvc3BhbGlhc25vfWBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuW9semfs+ihm+aVmeaQnOWwi1wiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjY2L011bHRpTWVkaWFIZWFsdGhFZHVjYXRpb24vVmlkZW9EYXRhQmFzZUFwcC5hc3B4XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwi5ZCE56eR5LuL57S5XCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L3JlZmVyZW5jZS5waHBcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLlhY3osrvkv53lgaVcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZOZXdzTWFpbi5hc3B4P1dTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWgmZnVuPTEmaG9zcGFsaWFzbm89JHt0aGlzLmhvc3BhbGlhc25vfWBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuS/neWBpeism+W6p1wiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsYGh0dHA6Ly82MS42Ni4xMTcuODgvV1BBcHBXZWJRdWVyeS9XRk5ld3NNYWluLmFzcHg/V1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZmdW49NSZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLmiJHnmoTnlKjol6VcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZEcnVnUXJ5TWFpbi5hc3B4P21lbWJlcm5vPSR7Z2xvYmFsLmxvZ2luUmVzcG9uc2UuYWNjb3V0TWVtYmVyTm99JldTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWgmaG9zcGFsaWFzbm89JHt0aGlzLmhvc3BhbGlhc25vfWBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuWwseiouuWJjeiomOmMhFwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsYGh0dHA6Ly82MS42Ni4xMTcuODgvV1BBcHBXZWJRdWVyeS9XRlByZVJlY29yZE1haW4uYXNweD9tZW1iZXJubz0ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfSZXU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmhvc3BhbGlhc25vPSR7dGhpcy5ob3NwYWxpYXNub31gXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLmiJHnmoTmqqLpqZdcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZMYWJRcnlNYWluLmFzcHg/bWVtYmVybm89JHtnbG9iYWwubG9naW5SZXNwb25zZS5hY2NvdXRNZW1iZXJOb30mV1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLlrrbkurrnlKjol6VcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZEcnVnUmVjb3JkLmFzcHg/bWVtYmVybm89JHtnbG9iYWwubG9naW5SZXNwb25zZS5hY2NvdXRNZW1iZXJOb30mV1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99MiZyb2xlPTFgXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLlrrbkurrooZvmlZlcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZJbnN0cnVjdGlvbk1haW4uYXNweD9tZW1iZXJubz0ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfSZXU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJnJvbGU9MSZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLlsLHphqvooYzkuovmm4ZcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZTY2hlZHVsZU1haW4uYXNweD9tZW1iZXJubz0ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfSZXU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmhvc3BhbGlhc25vPSR7dGhpcy5ob3NwYWxpYXNub31gXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLmiJHnmoTooZvmlZlcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZJbnN0cnVjdGlvbk1haW4uYXNweD9tZW1iZXJubz0ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfSZXU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmhvc3BhbGlhc25vPSR7dGhpcy5ob3NwYWxpYXNub31gXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIuWKoOWFpeacg+WToVwiOlxuICAgICAgICAgICAgICBpZihnbG9iYWwubG9naW5SZXNwb25zZS5hdXRoUmVzdWx0IT0nMCcpe1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdCA9IFRvYXN0Lm1ha2VUZXh0KFwi6KuL5YWI55m75Ye65pyD5ZOhXCIpO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm59XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jb25zZW50XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwi6KGA5aOTXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9IZWFsdGhNYW5hZ2UvSG9tZS9JbmRleC8ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfS8xYF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi6KGA57OWXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9IZWFsdGhNYW5hZ2UvSG9tZS9JbmRleC8ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfS8yYF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQk1JXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9IZWFsdGhNYW5hZ2UvSG9tZS9JbmRleC8ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfS8zYF0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLnmbvlh7pcIjpcbiAgICAgICAgICAgICAgdGhpcy5tZW1iZXIuc2V0KFwibmFtZVwiLCAnJyk7XG4gICAgICAgICAgICAgIGdsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291bnROYW1lID0gJyc7XG4gICAgICAgICAgICAgIGdsb2JhbC5sb2dpblJlc3BvbnNlLmF1dGhSZXN1bHQgPSAnMCc7XG4gICAgICAgICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgICAgICAgICAgIHRoaXMudG9hc3QgPSBUb2FzdC5tYWtlVGV4dChcIueZu+WHuuaIkOWKn1wiKTtcbiAgICAgICAgICAgICAgdGhpcy50b2FzdC5zaG93KCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLmiJHnmoToqIrmga9cIjpcbiAgICAgICAgICBhbGVydChnbG9iYWwubG9naW5SZXNwb25zZS50b2tlbmlkKTtcbiAgICAgICAgICBpZihnbG9iYWwubG9naW5SZXNwb25zZS5hdXRoUmVzdWx0PT0nMCcpe1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGTm90aWZpY2F0aW9uTWVzc2FnZS5hc3B4P3Rva2VudHlwZT1EMiZ0b2tlbmlkPSR7Z2xvYmFsLmxvZ2luUmVzcG9uc2UudG9rZW5pZH0maG9zcGFsaWFzbm89MjImV1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aGBdKTt9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsYGh0dHA6Ly82MS42Ni4xMTcuODgvV1BBcHBXZWJRdWVyeS9XRk5vdGlmaWNhdGlvbk1lc3NhZ2UuYXNweD90b2tlbnR5cGU9RDImdG9rZW5pZD0ke2dsb2JhbC5sb2dpblJlc3BvbnNlLnRva2VuaWR9Jm1lbWJlcm5vPSR7Z2xvYmFsLmxvZ2luUmVzcG9uc2UuYWNjb3V0TWVtYmVyTm99Jmhvc3BhbGlhc25vPTIyJldTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWhgXSk7fVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi6Kit5a6aXCI6XG4gICAgICAgICAgY29uc29sZS5sb2coZ2xvYmFsLmxvZ2luUmVzcG9uc2UudG9rZW5pZCk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxodG1sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJvZHk+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBuYW1lPVwiZlwiIGFjdGlvbj1cImh0dHA6Ly82MS42Ni4xMTcuODgvV1BBcHBXZWJRdWVyeS9XRk1lbWJlclNldC5hc3B4XCIgbWV0aG9kPVwiUE9TVFwiICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiICB2YWx1ZT0ke2dsb2JhbC5sb2dpblJlc3BvbnNlLm1lbWJlcl9pZH0gICAgIG5hbWU9IFwibWVtYmVyX2lkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiAgdmFsdWU9JHtnbG9iYWwubG9naW5SZXNwb25zZS5tZW1iZXJfcGFzc3dkfSAgIG5hbWU9IFwibWVtYmVyX3Bhc3N3ZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgIHZhbHVlPVwiMjJcIiAgICAgbmFtZT0gXCJob3NwYWxpYXNub1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgIHZhbHVlPVwiRDJcIiAgIG5hbWU9IFwidG9rZW50eXBlXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiAgdmFsdWU9XCJhcHBtb2JpbGVfY211aFwiICAgbmFtZT0gXCJXU1Bhc3N3b3JkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiAgdmFsdWU9XCJjbXVoX2FwcG1vYmlsZVwiICAgICBuYW1lPSBcIldTdXNlcmlkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiAgdmFsdWU9JHtnbG9iYWwubG9naW5SZXNwb25zZS50b2tlbmlkfSAgIG5hbWU9IFwidG9rZW5pZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9IFwidGV4dC9qYXZhc2NyaXB0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmZvcm1zW1wiZlwiXS5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2h0bWw+YF0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuXG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuXG4gIH1cblxuICBzaG93QnV0dG9uKGlkeCl7XG5cbiAgICAgIGlmKGlkeD09PTl8fGlkeD09PTEwfHxpZHg9PT0xMXx8aWR4PT09MTIpeyAvL+acg+WToeWwiOWNgFxuICAgICAgICAgIGlmKGdsb2JhbC5sb2dpblJlc3BvbnNlLmF1dGhSZXN1bHQ9PT0nMCcpe1xuICAgICAgICAgICAgICB0aGlzLnRvYXN0ID0gVG9hc3QubWFrZVRleHQoXCLoq4vlhYjnmbvlhaXmnIPlk6FcIik7XG4gICAgICAgICAgICAgIHRoaXMudG9hc3Quc2hvdygpO1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnNob3dCdXR0b25BcnJheS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICBpZihpPT09aWR4KXtcbiAgICAgICAgICAgICAgdGhpcy5zaG93QnV0dG9uQXJyYXlbaV09IXRoaXMuc2hvd0J1dHRvbkFycmF5W2ldO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0aGlzLnNob3dCdXR0b25BcnJheVtpXT1mYWxzZTsgICAgXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cblxuICBcblxuXG59XG4iXX0=