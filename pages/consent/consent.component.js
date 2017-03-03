"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CheckBox", function () { return require("nativescript-checkbox").CheckBox; });
var ConsentComponent = (function () {
    function ConsentComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    ConsentComponent.prototype.toggleCheck = function () {
        this.signatureCheckBox.nativeElement.toggle();
    };
    ConsentComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    ConsentComponent.prototype.displayActionDialog = function () {
        var options = {
            message: "請點選本人已詳閱之說明內容。",
            okButtonText: "確定"
        };
        dialogs.alert(options);
    };
    ConsentComponent.prototype.agree = function () {
        if (!this.signatureCheckBox.nativeElement.checked) {
            this.displayActionDialog();
            return;
        }
        this.router.navigate(["/signUp"]);
    };
    __decorate([
        core_1.ViewChild("CB"), 
        __metadata('design:type', core_1.ElementRef)
    ], ConsentComponent.prototype, "signatureCheckBox", void 0);
    ConsentComponent = __decorate([
        core_1.Component({
            selector: "consent",
            templateUrl: "pages/consent/consent.html",
            styleUrls: ["pages/consent/consent-common.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], ConsentComponent);
    return ConsentComponent;
}());
exports.ConsentComponent = ConsentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBQ3pFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQUcvQixJQUFZLE9BQU8sV0FBTSxZQUFZLENBQUMsQ0FBQTtBQUV0QyxpQ0FBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUd0RSxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFPN0U7SUFVRSwwQkFBb0IsTUFBYyxFQUFVLElBQVU7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07SUFFdEQsQ0FBQztJQU5LLHNDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBTUEsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUMsOENBQW1CLEdBQW5CO1FBRUYsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUM7UUFFRixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXJCLENBQUM7SUFFSCxnQ0FBSyxHQUFMO1FBRUcsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDakQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsTUFBTSxDQUFBO1FBQ1AsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBakNEO1FBQUMsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7OytEQUFBO0lBVGpCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7U0FDaEQsQ0FBQzs7d0JBQUE7SUF3Q0YsdUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLHdCQUFnQixtQkF1QzVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcblxyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiQ2hlY2tCb3hcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jaGVja2JveFwiKS5DaGVja0JveCk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjb25zZW50XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvY29uc2VudC9jb25zZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2NvbnNlbnQvY29uc2VudC1jb21tb24uY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uc2VudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuXHJcblx0QFZpZXdDaGlsZChcIkNCXCIpIHNpZ25hdHVyZUNoZWNrQm94OiBFbGVtZW50UmVmO1xyXG5cclxuXHRwdWJsaWMgdG9nZ2xlQ2hlY2soKSB7XHJcblx0ICAgIHRoaXMuc2lnbmF0dXJlQ2hlY2tCb3gubmF0aXZlRWxlbWVudC50b2dnbGUoKTtcclxuXHR9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAgIGRpc3BsYXlBY3Rpb25EaWFsb2coKSB7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7IFxyXG5cdFx0ICAgIG1lc3NhZ2U6IFwi6KuL6bue6YG45pys5Lq65bey6Kmz6Zax5LmL6Kqq5piO5YWn5a6544CCXCIsXHJcblx0XHQgICAgb2tCdXR0b25UZXh0OiBcIueiuuWumlwiXHJcblx0XHR9O1xyXG5cclxuXHRcdGRpYWxvZ3MuYWxlcnQob3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxuICBhZ3JlZSgpe1xyXG5cclxuXHQgICAgaWYoIXRoaXMuc2lnbmF0dXJlQ2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkKXtcclxuXHQgICAgXHR0aGlzLmRpc3BsYXlBY3Rpb25EaWFsb2coKTtcclxuXHQgICAgXHRyZXR1cm5cclxuXHQgICAgfVxyXG5cclxuXHQgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NpZ25VcFwiXSk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=