"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.page.actionBarHidden = true;
        //this.page.backgroundImage = this.page.ios ? "res://homebg_ldpi_asia.png" : "res://homebg_ldpi_asia.png";
    };
    AppComponent.prototype.onTap = function () {
        this.router.navigate(["/login"]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.html",
            styles: [
                "\n  .submit-button {\n    background-color: #CB1D00;\n    color: white;\n    margin-top: 20;\n  }\n\n  .btn{\n      background-color: #F07788;\n      color:whitesmoke;border-radius: 10;\n      border-width: 2;\n      border-color: #f6adb7;\n      height:\"50px\";\n  }\n  "
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5RCxlQUFlLENBQUMsQ0FBQTtBQUN6RSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQTJCekM7SUFHRSxzQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFbEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDRSxtQ0FBbUM7UUFDbkMsMEdBQTBHO0lBQzVHLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFuQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFVBQVU7WUFDckIsTUFBTSxFQUFFO2dCQUNWLGtSQWNDO2FBQ0E7U0FDRixDQUFDOztvQkFBQTtJQWlCRixtQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksb0JBQVksZUFnQnhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5cclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcImFwcC5odG1sXCIsXHJcbiAgICBzdHlsZXM6IFtcclxuICBgXHJcbiAgLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NCMUQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDIwO1xyXG4gIH1cclxuXHJcbiAgLmJ0bntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwNzc4ODtcclxuICAgICAgY29sb3I6d2hpdGVzbW9rZTtib3JkZXItcmFkaXVzOiAxMDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAyO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNmNmFkYjc7XHJcbiAgICAgIGhlaWdodDpcIjUwcHhcIjtcclxuICB9XHJcbiAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvL3RoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgLy90aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gdGhpcy5wYWdlLmlvcyA/IFwicmVzOi8vaG9tZWJnX2xkcGlfYXNpYS5wbmdcIiA6IFwicmVzOi8vaG9tZWJnX2xkcGlfYXNpYS5wbmdcIjtcclxuICB9XHJcblxyXG4gIG9uVGFwKCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19