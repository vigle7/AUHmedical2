"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var pageModule = require('ui/page');
var webViewModule = require("ui/web-view");
var frameModule = require('ui/frame');
// >> passing-parameters
var ModalViewComponent = (function () {
    //constructor(private params: ModalDialogParams, private page: Page) {}
    function ModalViewComponent(page) {
        this.page = page;
        this.factoryFunc = function (url) {
            return function () {
                var webView = new webViewModule.WebView();
                webView.url = url;
                var page = new pageModule.Page();
                page.content = webView;
                return page;
            };
        };
    }
    ModalViewComponent.prototype.ngOnInit = function () {
        this.myItems = ["依科別掛號", "依醫師掛號", "依歷史記錄掛號"];
    };
    ModalViewComponent.prototype.submit = function (arg) {
        switch (arg) {
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
    };
    ModalViewComponent = __decorate([
        core_1.Component({
            selector: "logpage",
            templateUrl: "pages/entry/pageModal.html",
            styleUrls: ["pages/entry/pageModal-common.css"],
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], ModalViewComponent);
    return ModalViewComponent;
}());
exports.ModalViewComponent = ModalViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZU1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZU1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBNEMsZUFBZSxDQUFDLENBQUE7QUFHNUQscUJBQXFCLFNBQVMsQ0FBQyxDQUFBO0FBRS9CLElBQU8sVUFBVSxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZDLElBQU8sYUFBYSxXQUFXLGFBQWEsQ0FBQyxDQUFDO0FBRTlDLElBQU8sV0FBVyxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBRXpDLHdCQUF3QjtBQU14QjtJQUlJLHVFQUF1RTtJQUN0RSw0QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFNL0IsZ0JBQVcsR0FBRyxVQUFDLEdBQUc7WUFDTixNQUFNLENBQUM7Z0JBQ1AsSUFBSSxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixJQUFJLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDWixDQUFDLENBQUE7UUFBQSxDQUFDLENBQUM7SUFibUIsQ0FBQztJQUVuQyxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQVdELG1DQUFNLEdBQU4sVUFBTyxHQUFHO1FBRU4sTUFBTSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNULEtBQUssT0FBTztnQkFDUixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0VBQW9FLENBQUMsQ0FBQyxDQUFDO2dCQUN2SCxLQUFLLENBQUM7WUFDVixLQUFLLE9BQU87Z0JBQ1IsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHlFQUF5RSxDQUFDLENBQUMsQ0FBQztnQkFDNUgsS0FBSyxDQUFDO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlILEtBQUssQ0FBQztZQUNWLFFBQVE7UUFHWixDQUFDO1FBQ0QsOEJBQThCO0lBQ2xDLENBQUM7SUExQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDakIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNsRCxDQUFDOzswQkFBQTtJQXdDRix5QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksMEJBQWtCLHFCQXVDOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5pbXBvcnQgcGFnZU1vZHVsZSA9IHJlcXVpcmUoJ3VpL3BhZ2UnKTtcbmltcG9ydCB3ZWJWaWV3TW9kdWxlID0gcmVxdWlyZShcInVpL3dlYi12aWV3XCIpO1xuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcbmltcG9ydCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoJ3VpL2ZyYW1lJyk7XG5cbi8vID4+IHBhc3NpbmctcGFyYW1ldGVyc1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxvZ3BhZ2VcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9lbnRyeS9wYWdlTW9kYWwuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvZW50cnkvcGFnZU1vZGFsLWNvbW1vbi5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgbXlJdGVtczogQXJyYXk8c3RyaW5nPjtcblxuICAgIC8vY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG4gICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm15SXRlbXMgPSBbXCLkvp3np5HliKXmjpvomZ9cIiwgXCLkvp3phqvluKvmjpvomZ9cIixcIuS+neatt+WPsuiomOmMhOaOm+iZn1wiXTtcbiAgICB9XG5cbiAgICBmYWN0b3J5RnVuYyA9ICh1cmwpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4ge1xuICAgICAgICAgICAgICAgIHZhciB3ZWJWaWV3ID0gbmV3IHdlYlZpZXdNb2R1bGUuV2ViVmlldygpO1xuICAgICAgICAgICAgICAgIHdlYlZpZXcudXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIHZhciBwYWdlID0gbmV3IHBhZ2VNb2R1bGUuUGFnZSgpO1xuICAgICAgICAgICAgICAgIHBhZ2UuY29udGVudCA9IHdlYlZpZXc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICAgICAgICAgICAgfX07XG5cbiAgICBzdWJtaXQoYXJnKXtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaChhcmcpIHtcbiAgICAgICAgICAgIGNhc2UgXCLkvp3np5HliKXmjpvomZ9cIjpcbiAgICAgICAgICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUodGhpcy5mYWN0b3J5RnVuYyhcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L2NhdGVnb3J5LnBocD9sb2NhbGU9emgtSGFudFwiKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwi5L6d6Yar5bir5o6b6JmfXCI6XG4gICAgICAgICAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKHRoaXMuZmFjdG9yeUZ1bmMoXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9kb2N0b3Jfc2VhcmNoLnBocD9sb2NhbGU9emgtSGFudFwiKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwi5L6d5q235Y+y6KiY6YyE5o6b6JmfXCI6XG4gICAgICAgICAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKHRoaXMuZmFjdG9yeUZ1bmMoXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9pbnNlcnRfdXNlcl9pZDMucGhwP2xvY2FsZT16aC1IYW50XCIpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG5cblxuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xuICAgIH1cblxufSJdfQ==