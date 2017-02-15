"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CheckBox", function () { return require("nativescript-checkbox").CheckBox; });
var JoinComponent = (function () {
    function JoinComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    JoinComponent.prototype.toggleCheck = function () {
        this.signatureCheckBox.nativeElement.toggle();
    };
    JoinComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    JoinComponent.prototype.displayActionDialog = function () {
        var options = {
            message: "請點選本人已詳閱之說明內容。",
            okButtonText: "確定"
        };
        dialogs.alert(options);
    };
    JoinComponent.prototype.agree = function () {
        if (!this.signatureCheckBox.nativeElement.checked) {
            this.displayActionDialog();
            return;
        }
        this.router.navigate(["/register"]);
    };
    JoinComponent.prototype.cancel = function () {
        this.router.navigate(["/login"]);
    };
    __decorate([
        core_1.ViewChild("CB"), 
        __metadata('design:type', core_1.ElementRef)
    ], JoinComponent.prototype, "signatureCheckBox", void 0);
    JoinComponent = __decorate([
        core_1.Component({
            selector: "join",
            templateUrl: "pages/join/join.html",
            styleUrls: ["pages/join/join-common.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], JoinComponent);
    return JoinComponent;
}());
exports.JoinComponent = JoinComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBQ3pFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQUcvQixJQUFZLE9BQU8sV0FBTSxZQUFZLENBQUMsQ0FBQTtBQUV0QyxpQ0FBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUd0RSxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFPN0U7SUFVRSx1QkFBb0IsTUFBYyxFQUFVLElBQVU7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07SUFFdEQsQ0FBQztJQU5LLG1DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBTUEsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUMsMkNBQW1CLEdBQW5CO1FBRUYsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUM7UUFFRixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXJCLENBQUM7SUFLSCw2QkFBSyxHQUFMO1FBRUcsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDakQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsTUFBTSxDQUFBO1FBQ1AsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUEsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBeENEO1FBQUMsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7OzREQUFBO0lBVGpCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzs7cUJBQUE7SUErQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLHFCQUFhLGdCQThDekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuXHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJDaGVja0JveFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNoZWNrYm94XCIpLkNoZWNrQm94KTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImpvaW5cIixcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9qb2luL2pvaW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvam9pbi9qb2luLWNvbW1vbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKb2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG5cclxuXHRAVmlld0NoaWxkKFwiQ0JcIikgc2lnbmF0dXJlQ2hlY2tCb3g6IEVsZW1lbnRSZWY7XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVDaGVjaygpIHtcclxuXHQgICAgdGhpcy5zaWduYXR1cmVDaGVja0JveC5uYXRpdmVFbGVtZW50LnRvZ2dsZSgpO1xyXG5cdH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gICAgZGlzcGxheUFjdGlvbkRpYWxvZygpIHtcclxuXHJcblx0XHRsZXQgb3B0aW9ucyA9IHsgXHJcblx0XHQgICAgbWVzc2FnZTogXCLoq4vpu57pgbjmnKzkurrlt7LoqbPplrHkuYvoqqrmmI7lhaflrrnjgIJcIixcclxuXHRcdCAgICBva0J1dHRvblRleHQ6IFwi56K65a6aXCJcclxuXHRcdH07XHJcblxyXG5cdFx0ZGlhbG9ncy5hbGVydChvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGFncmVlKCl7XHJcblxyXG5cdCAgICBpZighdGhpcy5zaWduYXR1cmVDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQpe1xyXG5cdCAgICBcdHRoaXMuZGlzcGxheUFjdGlvbkRpYWxvZygpO1xyXG5cdCAgICBcdHJldHVyblxyXG5cdCAgICB9XHJcblxyXG5cdCAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVnaXN0ZXJcIl0pO1xyXG5cdH1cclxuXHJcbiAgY2FuY2VsKCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xyXG5cdH1cclxuXHJcbn1cclxuIl19