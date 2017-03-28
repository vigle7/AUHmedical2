"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
//import pageModule = require('ui/page');
//import webViewModule = require("ui/web-view");
//import dialogs = require("ui/dialogs");
//import frameModule = require('ui/frame');
// >> passing-parameters
var ModalViewComponent = (function () {
    //constructor(private params: ModalDialogParams, private page: Page) {}
    function ModalViewComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    ModalViewComponent.prototype.ngOnInit = function () {
        this.myItems = ["依科別掛號", "依醫師掛號", "依歷史記錄掛號"];
        this.showLogin = true;
    };
    ModalViewComponent.prototype.submit = function (arg) {
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
            default:
        }
        //this.params.closeCallback();
    };
    ModalViewComponent = __decorate([
        core_1.Component({
            selector: "logpage",
            templateUrl: "pages/entry/pageModal.html",
            styleUrls: ["pages/entry/pageModal-common.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], ModalViewComponent);
    return ModalViewComponent;
}());
exports.ModalViewComponent = ModalViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZU1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZU1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBNEMsZUFBZSxDQUFDLENBQUE7QUFDNUQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMscUJBQXFCLFNBQVMsQ0FBQyxDQUFBO0FBRS9CLHlDQUF5QztBQUN6QyxnREFBZ0Q7QUFDaEQseUNBQXlDO0FBQ3pDLDJDQUEyQztBQUUzQyx3QkFBd0I7QUFNeEI7SUFLSSx1RUFBdUU7SUFDdEUsNEJBQW9CLE1BQWMsRUFBUyxJQUFVO1FBQWpDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUUxRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxHQUFHO1FBRVYsTUFBTSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNULEtBQUssT0FBTztnQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxvRUFBb0UsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BHLEtBQUssQ0FBQztZQUNWLEtBQUssT0FBTztnQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyx5RUFBeUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pHLEtBQUssQ0FBQztZQUNWLEtBQUssU0FBUztnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNHLEtBQUssQ0FBQztZQUNWLFFBQVE7UUFFWixDQUFDO1FBQ0QsOEJBQThCO0lBQ2xDLENBQUM7SUFsQ0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDakIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNsRCxDQUFDOzswQkFBQTtJQTZERix5QkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksMEJBQWtCLHFCQTREOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuLy9pbXBvcnQgcGFnZU1vZHVsZSA9IHJlcXVpcmUoJ3VpL3BhZ2UnKTtcbi8vaW1wb3J0IHdlYlZpZXdNb2R1bGUgPSByZXF1aXJlKFwidWkvd2ViLXZpZXdcIik7XG4vL2ltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG4vL2ltcG9ydCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoJ3VpL2ZyYW1lJyk7XG5cbi8vID4+IHBhc3NpbmctcGFyYW1ldGVyc1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxvZ3BhZ2VcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9lbnRyeS9wYWdlTW9kYWwuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvZW50cnkvcGFnZU1vZGFsLWNvbW1vbi5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgbXlJdGVtczogQXJyYXk8c3RyaW5nPjtcbiAgICBwcml2YXRlIHNob3dMb2dpbjpib29sZWFuO1xuXG4gICAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGFnZTogUGFnZSkge31cbiAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5teUl0ZW1zID0gW1wi5L6d56eR5Yil5o6b6JmfXCIsIFwi5L6d6Yar5bir5o6b6JmfXCIsXCLkvp3mrbflj7LoqJjpjITmjpvomZ9cIl07XG4gICAgICAgIHRoaXMuc2hvd0xvZ2luID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdWJtaXQoYXJnKXtcblxuICAgIHN3aXRjaChhcmcpIHtcbiAgICAgICAgY2FzZSBcIuS+neenkeWIpeaOm+iZn1wiOlxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLFwiaHR0cDovLzYxLjY2LjExNy4xOTc6MjE4MS9jbXVoX2FwcHRlc3QvY2F0ZWdvcnkucGhwP2xvY2FsZT16aC1IYW50XCJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwi5L6d6Yar5bir5o6b6JmfXCI6XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9kb2N0b3Jfc2VhcmNoLnBocD9sb2NhbGU9emgtSGFudFwiXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIuS+neatt+WPsuiomOmMhOaOm+iZn1wiOlxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLFwiaHR0cDovLzYxLjY2LjExNy4xOTc6MjE4MS9jbXVoX2FwcHRlc3QvaW5zZXJ0X3VzZXJfaWQzLnBocD9sb2NhbGU9emgtSGFudFwiXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcblxuICAgIH1cbiAgICAvL3RoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbn1cblxuICAgIC8vIGZhY3RvcnlGdW5jID0gKHVybCk9PntcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gKCk9PiB7XG4gICAgLy8gICAgICAgICAgICAgdmFyIHdlYlZpZXcgPSBuZXcgd2ViVmlld01vZHVsZS5XZWJWaWV3KCk7XG4gICAgLy8gICAgICAgICAgICAgd2ViVmlldy51cmwgPSB1cmw7XG4gICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgdmFyIHBhZ2UgPSBuZXcgcGFnZU1vZHVsZS5QYWdlKCk7XG4gICAgLy8gICAgICAgICAgICAgcGFnZS5jb250ZW50ID0gd2ViVmlldztcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAvLyAgICAgICAgICAgICB9fTtcblxuICAgIC8vIHN1Ym1pdChhcmcpe1xuICAgICAgICBcbiAgICAvLyAgICAgc3dpdGNoKGFyZykge1xuICAgIC8vICAgICAgICAgY2FzZSBcIuS+neenkeWIpeaOm+iZn1wiOlxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2hvd0xvZ2luID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKHRoaXMuZmFjdG9yeUZ1bmMoXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9jYXRlZ29yeS5waHA/bG9jYWxlPXpoLUhhbnRcIikpO1xuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgY2FzZSBcIuS+nemGq+W4q+aOm+iZn1wiOlxuICAgIC8vICAgICAgICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZSh0aGlzLmZhY3RvcnlGdW5jKFwiaHR0cDovLzYxLjY2LjExNy4xOTc6MjE4MS9jbXVoX2FwcHRlc3QvZG9jdG9yX3NlYXJjaC5waHA/bG9jYWxlPXpoLUhhbnRcIikpO1xuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgY2FzZSBcIuS+neatt+WPsuiomOmMhOaOm+iZn1wiOlxuICAgIC8vICAgICAgICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZSh0aGlzLmZhY3RvcnlGdW5jKFwiaHR0cDovLzYxLjY2LjExNy4xOTc6MjE4MS9jbXVoX2FwcHRlc3QvaW5zZXJ0X3VzZXJfaWQzLnBocD9sb2NhbGU9emgtSGFudFwiKSk7XG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxufSJdfQ==