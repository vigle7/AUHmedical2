"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var MenuComponent = (function () {
    function MenuComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.showButton1 = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBQ3pFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQVEvQjtJQUlFLHVCQUFvQixNQUFjLEVBQVcsSUFBVTtRQUFuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVcsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUV2RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNNLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFoQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFFaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOztxQkFBQTtJQWVGLG9CQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxxQkFBYSxnQkFjekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHRhYlZpZXdNb2R1bGUgPSByZXF1aXJlKFwidWkvdGFiLXZpZXdcIik7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1lbnVcIixcblxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9tZW51L21lbnUuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL21lbnUvbWVudS1jb21tb24uY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHNob3dCdXR0b24xOmJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgIHByaXZhdGUgcGFnZTogUGFnZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zaG93QnV0dG9uMSA9IGZhbHNlO1xuICB9XG5cblxuXG59XG4iXX0=