"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var MenuComponent = (function () {
    function MenuComponent(router, page) {
        this.router = router;
        this.page = page;
        this.showButtonArray = [false, false, false, false, false, false, false, false, false];
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.showWebView = false;
    };
    MenuComponent.prototype.submit = function (arg) {
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
                this.router.navigate(["/webView", "http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=2&hospaliasno=1"]);
                break;
            case "醫院新訊":
                this.router.navigate(["/webView", "http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=3&hospaliasno=1"]);
                break;
            case "醫師介紹":
                this.router.navigate(["/webView", "http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=4&hospaliasno=1"]);
                break;
            case "西藥服務":
                this.router.navigate(["/webView", "http://61.66.117.88/WPAppWebQuery/WFDrugMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=1&hospaliasno=1"]);
                break;
            case "中藥服務":
                this.router.navigate(["/webView", "http://61.66.117.88/WPAppWebQuery/WFDrugMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=2&hospaliasno=1"]);
                break;
            case "中亞健康網":
                this.router.navigate(["/webView", "http://www.ca2-health.com/?FM=1&hospaliasno=1"]);
                break;
            case "衛教單張":
                this.router.navigate(["/webView", "http://61.66.117.88/WPAppWebQuery/WFInstructionsQry.aspx?hospaliasno=1"]);
                break;
            case "影音衛教搜尋":
                this.router.navigate(["/webView", "http://61.66.117.66/MultiMediaHealthEducation/VideoDataBaseApp.aspx"]);
                break;
            default:
        }
        //this.params.closeCallback();
    };
    MenuComponent.prototype.showButton = function (idx) {
        for (var i = 0; i < this.showButtonArray.length; i++) {
            if (i === idx) {
                this.showButtonArray[i] = !this.showButtonArray[i];
            }
            else {
                this.showButtonArray[i] = false;
            }
        }
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: "menu",
            templateUrl: "pages/menu/menu.html",
            styleUrls: ["pages/menu/menu-common.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQW1DLGVBQWUsQ0FBQyxDQUFBO0FBQ25ELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQVkvQjtJQU1FLHVCQUFvQixNQUFjLEVBQVcsSUFBVTtRQUFuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVcsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUovQyxvQkFBZSxHQUFnQixDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFNL0YsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFFTSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEdBQUc7UUFFTixNQUFNLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1QsS0FBSyxPQUFPO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLG9FQUFvRSxDQUFDLENBQUMsQ0FBQztnQkFDcEcsS0FBSyxDQUFDO1lBQ1YsS0FBSyxPQUFPO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHlFQUF5RSxDQUFDLENBQUMsQ0FBQztnQkFDekcsS0FBSyxDQUFDO1lBQ1YsS0FBSyxTQUFTO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLDJFQUEyRSxDQUFDLENBQUMsQ0FBQztnQkFDM0csS0FBSyxDQUFDO1lBRVYsS0FBSyxTQUFTO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHFHQUFxRyxDQUFDLENBQUMsQ0FBQztnQkFDckksS0FBSyxDQUFDO1lBRVYsS0FBSyxRQUFRO2dCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHdEQUF3RCxDQUFDLENBQUMsQ0FBQztnQkFDeEYsS0FBSyxDQUFDO1lBQ1YsS0FBSyxVQUFVO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLDZHQUE2RyxDQUFDLENBQUMsQ0FBQztnQkFDN0ksS0FBSyxDQUFDO1lBQ1YsS0FBSyxVQUFVO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLDZGQUE2RixDQUFDLENBQUMsQ0FBQztnQkFDN0gsS0FBSyxDQUFDO1lBRVYsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHlIQUF5SCxDQUFDLENBQUMsQ0FBQztnQkFDekosS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHlIQUF5SCxDQUFDLENBQUMsQ0FBQztnQkFDekosS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHlIQUF5SCxDQUFDLENBQUMsQ0FBQztnQkFDekosS0FBSyxDQUFDO1lBRVYsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHlIQUF5SCxDQUFDLENBQUMsQ0FBQztnQkFDekosS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHlIQUF5SCxDQUFDLENBQUMsQ0FBQztnQkFDekosS0FBSyxDQUFDO1lBRVYsS0FBSyxPQUFPO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztnQkFDL0UsS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHdFQUF3RSxDQUFDLENBQUMsQ0FBQztnQkFDeEcsS0FBSyxDQUFDO1lBQ1YsS0FBSyxRQUFRO2dCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHFFQUFxRSxDQUFDLENBQUMsQ0FBQztnQkFDckcsS0FBSyxDQUFDO1lBRVYsUUFBUTtRQUVaLENBQUM7UUFDRCw4QkFBOEI7SUFDbEMsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxHQUFHO1FBQ1YsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzNDLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBRyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUNSLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUF6Rkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFFaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOztxQkFBQTtJQXNGRixvQkFBQztBQUFELENBQUMsQUFyRkQsSUFxRkM7QUFyRlkscUJBQWEsZ0JBcUZ6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCAgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtZW51XCIsXG5cbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWVudS9tZW51Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tZW51L21lbnUtY29tbW9uLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzaG93QnV0dG9uQXJyYXk6QXJyYXk8Ym9vbGVhbj49W2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXTtcblxuICBwcml2YXRlIHNob3dXZWJWaWV3OmJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgIHByaXZhdGUgcGFnZTogUGFnZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLnNob3dXZWJWaWV3ID0gZmFsc2U7XG4gIH1cblxuICBzdWJtaXQoYXJnKXtcblxuICAgICAgc3dpdGNoKGFyZykge1xuICAgICAgICAgIGNhc2UgXCLkvp3np5HliKXmjpvomZ9cIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLFwiaHR0cDovLzYxLjY2LjExNy4xOTc6MjE4MS9jbXVoX2FwcHRlc3QvY2F0ZWdvcnkucGhwP2xvY2FsZT16aC1IYW50XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuS+nemGq+W4q+aOm+iZn1wiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9kb2N0b3Jfc2VhcmNoLnBocD9sb2NhbGU9emgtSGFudFwiXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLkvp3mrbflj7LoqJjpjITmjpvomZ9cIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLFwiaHR0cDovLzYxLjY2LjExNy4xOTc6MjE4MS9jbXVoX2FwcHRlc3QvaW5zZXJ0X3VzZXJfaWQzLnBocD9sb2NhbGU9emgtSGFudFwiXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIuaOm+iZn+afpeipouaIluWPlua2iFwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9pbnNlcnRfdXNlcl9pZDIucGhwP3RpdGxlPemgkOe0hOaOm+iZn+afpeipoiZuZXh0TGluaz1xdWVyeV9yZWdpc3Rlci5waHBcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLlhbblroPpgLLluqbmn6XoqaJcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLFwiaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGb3JzY2hlZHVsZXFyeS5hc3B4XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuS+neiouumWk+afpeeci+iouumAsuW6plwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9pbnNlcnRfdXNlcl9pZDQucGhwP3RpdGxlPeeci+iouumAsuW6piZuZXh0TGluaz1wcm9ncmVzczQucGhwJmxvY2FsZT16aC1IYW50XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuS+neeXheS6uuafpeeci+iouumAsuW6plwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9pbnNlcnRfdXNlcl9pZDIucGhwP3RpdGxlPeafpeipouiouuiZnyZuZXh0TGluaz1wcm9ncmVzcy5waHBcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLlgaXlurfmlrDnn6VcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLFwiaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGTmV3c01haW4uYXNweD9XU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmZ1bj0yJmhvc3BhbGlhc25vPTFcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi6Yar6Zmi5paw6KiKXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuODgvV1BBcHBXZWJRdWVyeS9XRk5ld3NNYWluLmFzcHg/V1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZmdW49MyZob3NwYWxpYXNubz0xXCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIumGq+W4q+S7i+e0uVwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZOZXdzTWFpbi5hc3B4P1dTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWgmZnVuPTQmaG9zcGFsaWFzbm89MVwiXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIuilv+iXpeacjeWLmVwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZEcnVnTWFpbi5hc3B4P1dTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWgmZnVuPTEmaG9zcGFsaWFzbm89MVwiXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLkuK3ol6XmnI3li5lcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLFwiaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGRHJ1Z01haW4uYXNweD9XU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmZ1bj0yJmhvc3BhbGlhc25vPTFcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLkuK3kup7lgaXlurfntrJcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLFwiaHR0cDovL3d3dy5jYTItaGVhbHRoLmNvbS8/Rk09MSZob3NwYWxpYXNubz0xXCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuihm+aVmeWWruW8tVwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZJbnN0cnVjdGlvbnNRcnkuYXNweD9ob3NwYWxpYXNubz0xXCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuW9semfs+ihm+aVmeaQnOWwi1wiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjY2L011bHRpTWVkaWFIZWFsdGhFZHVjYXRpb24vVmlkZW9EYXRhQmFzZUFwcC5hc3B4XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgICAvL3RoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHNob3dCdXR0b24oaWR4KXtcbiAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5zaG93QnV0dG9uQXJyYXkubGVuZ3RoO2krKyl7XG4gICAgICAgICAgaWYoaT09PWlkeCl7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0J1dHRvbkFycmF5W2ldPSF0aGlzLnNob3dCdXR0b25BcnJheVtpXTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5zaG93QnV0dG9uQXJyYXlbaV09ZmFsc2U7ICAgIFxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG59XG4iXX0=