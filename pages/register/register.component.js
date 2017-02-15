"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var user_1 = require("../../share/user");
var dialogs = require("ui/dialogs");
var RegisterComponent = (function () {
    function RegisterComponent(router, page) {
        this.router = router;
        this.page = page;
        this.isDatePickerVisible = false;
        this.user = new user_1.User();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.page.actionBar.title = "申請會員";
        var firstTextfield = this.page.getViewById("firstTextFieldId");
        firstTextfield.focus();
    };
    RegisterComponent.prototype.displayActionDialog = function () {
        var options = {
            message: "請填入所有資料項目",
            okButtonText: "確定"
        };
        dialogs.alert(options);
    };
    RegisterComponent.prototype.enterDate = function () {
        var datePicker = this.page.getViewById("datePicker");
        var selectedDate = new Date(datePicker.year, datePicker.month - 1, datePicker.day);
        this.user.ambbgndt = selectedDate;
        this.isDatePickerVisible = false;
    };
    RegisterComponent.prototype.showDatePicker = function () {
        var textFielsBDate = this.page.getViewById("textFieldBDate");
        this.isDatePickerVisible = true;
        setTimeout(function () {
            textFielsBDate.dismissSoftInput();
        }, 100);
    };
    RegisterComponent.prototype.register = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.user.ambno === "" || this.user.ambemail === "") {
            this.displayActionDialog();
            return;
        }
        alert(this.user.ambemail);
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(["/login"]);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "register",
            templateUrl: "pages/register/register.html",
            styleUrls: ["pages/register/register.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFHekMscUJBQXFCLFNBQVMsQ0FBQyxDQUFBO0FBRS9CLHFCQUFtQixrQkFDbkIsQ0FBQyxDQURvQztBQUNyQyxJQUFZLE9BQU8sV0FBTSxZQUFZLENBQUMsQ0FBQTtBQVF0QztJQU1JLDJCQUFvQixNQUFjLEVBQVMsSUFBVTtRQUFqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUg5Qyx3QkFBbUIsR0FBVyxLQUFLLENBQUM7UUFLekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBRXpCLENBQUM7SUFFQyxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLGNBQWMsR0FBMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzRixjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVGLCtDQUFtQixHQUFuQjtRQUVELElBQUksT0FBTyxHQUFHO1lBQ1YsT0FBTyxFQUFFLFdBQVc7WUFDcEIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQztRQUVGLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdkIsQ0FBQztJQUVDLHFDQUFTLEdBQVQ7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBYSxZQUFZLENBQUMsQ0FBQztRQUNqRSxJQUFJLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUVyQyxDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFZLGdCQUFnQixDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUVoQyxVQUFVLENBQUM7WUFDUCxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFWixDQUFDO0lBRUMsb0NBQVEsR0FBUjtRQUVJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBRyxFQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ2pELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLE1BQU0sQ0FBQTtRQUNWLENBQUM7UUFFSCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUwsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBdEVQO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzs7eUJBQUE7SUFvRUYsd0JBQUM7QUFBRCxDQUFDLEFBbkVELElBbUVDO0FBbkVZLHlCQUFpQixvQkFtRTdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL3NoYXJlL3VzZXJcIlxyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwicmVnaXN0ZXJcIixcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIHVzZXI6VXNlcjtcclxuICAgIHB1YmxpYyBpc0RhdGVQaWNrZXJWaXNpYmxlOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHJcbiAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9IFwi55Sz6KuL5pyD5ZOhXCI7XHJcbiAgICAgICAgICAgICBsZXQgZmlyc3RUZXh0ZmllbGQ6IFRleHRGaWVsZCA9IDxUZXh0RmllbGQ+IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcImZpcnN0VGV4dEZpZWxkSWRcIik7XHJcbiAgICAgICAgZmlyc3RUZXh0ZmllbGQuZm9jdXMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICBkaXNwbGF5QWN0aW9uRGlhbG9nKCkge1xyXG5cclxuICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBtZXNzYWdlOiBcIuiri+Whq+WFpeaJgOacieizh+aWmemgheebrlwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCLnorrlrppcIlxyXG4gICAgfTtcclxuXHJcbiAgICBkaWFsb2dzLmFsZXJ0KG9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgIGVudGVyRGF0ZSgpIHtcclxuICAgICAgICAgIGxldCBkYXRlUGlja2VyID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPERhdGVQaWNrZXI+KFwiZGF0ZVBpY2tlclwiKTtcclxuICAgICAgICAgIGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXRlUGlja2VyLnllYXIsIGRhdGVQaWNrZXIubW9udGggLSAxLCBkYXRlUGlja2VyLmRheSk7XHJcbiAgICAgICAgICB0aGlzLnVzZXIuYW1iYmduZHQgPSBzZWxlY3RlZERhdGU7XHJcbiAgICAgICAgICB0aGlzLmlzRGF0ZVBpY2tlclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNob3dEYXRlUGlja2VyKCkge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbHNCRGF0ZSA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwidGV4dEZpZWxkQkRhdGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuaXNEYXRlUGlja2VyVmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGV4dEZpZWxzQkRhdGUuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICAgcmVnaXN0ZXIoKXtcclxuXHJcbiAgICAgICAgICBpZiAoIXRoaXMudXNlci5pc1ZhbGlkRW1haWwoKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZih0aGlzLnVzZXIuYW1ibm89PT1cIlwiIHx8IHRoaXMudXNlci5hbWJlbWFpbD09PVwiXCIgKXtcclxuICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlBY3Rpb25EaWFsb2coKTtcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgYWxlcnQodGhpcy51c2VyLmFtYmVtYWlsKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIGNhbmNlbCgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XHJcbiAgICAgIH1cclxuXHJcbn0iXX0=