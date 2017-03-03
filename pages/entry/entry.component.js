"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var EntryComponent = (function () {
    function EntryComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    //   constructor(private router: Router,private modalService: ModalDialogService,private vcRef: ViewContainerRef) {
    //   }
    // createModelView() {
    //     let that = this;
    //     let currentDate = new Date();
    //     let options: ModalDialogOptions = {
    //         viewContainerRef: this.vcRef,
    //         context: "context",
    //         fullscreen: true
    //     };
    //     this.modalService.showModal(ModalViewComponent, options);
    // }
    EntryComponent.prototype.ngOnInit = function () {
        //this.page.actionBarHidden = true;
        //this.page.backgroundImage = this.page.ios ? "res://homebg_ldpi_asia.png" : "res://homebg_ldpi_asia.png";
        this.page.actionBarHidden = true;
    };
    EntryComponent = __decorate([
        core_1.Component({
            selector: "entry",
            templateUrl: "pages/entry/entry.html",
            //providers: [ModalDialogService],
            styleUrls: ["pages/entry/entry-common.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], EntryComponent);
    return EntryComponent;
}());
exports.EntryComponent = EntryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW50cnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBNEUsZUFBZSxDQUFDLENBQUE7QUFDNUYsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFLekMscUJBQXFCLFNBQVMsQ0FBQyxDQUFBO0FBbUIvQjtJQUdFLHdCQUFvQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUV0RCxDQUFDO0lBQ0gsbUhBQW1IO0lBRW5ILE1BQU07SUFHRixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsd0NBQXdDO0lBQ3hDLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsU0FBUztJQUVULGdFQUFnRTtJQUVoRSxJQUFJO0lBR04saUNBQVEsR0FBUjtRQUNFLG1DQUFtQztRQUNuQywwR0FBMEc7UUFDMUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRW5DLENBQUM7SUFwQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDZixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLGtDQUFrQztZQUNsQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDOztzQkFBQTtJQXFDRixxQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksc0JBQWMsaUJBb0MxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCxWaWV3Q29udGFpbmVyUmVmICAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcblxyXG5pbXBvcnQgZnJhbWVNb2R1bGUgPSByZXF1aXJlKCd1aS9mcmFtZScpO1xyXG5pbXBvcnQgcGFnZU1vZHVsZSA9IHJlcXVpcmUoJ3VpL3BhZ2UnKTtcclxuaW1wb3J0IHdlYlZpZXdNb2R1bGUgPSByZXF1aXJlKFwidWkvd2ViLXZpZXdcIik7XHJcblxyXG5cclxuXHJcbi8vaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IE1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VNb2RhbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZW50cnlcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2VudHJ5L2VudHJ5Lmh0bWxcIixcclxuICAgIC8vcHJvdmlkZXJzOiBbTW9kYWxEaWFsb2dTZXJ2aWNlXSxcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvZW50cnkvZW50cnktY29tbW9uLmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVudHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG5cclxuICB9XHJcbi8vICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuXHJcbi8vICAgfVxyXG5cclxuXHJcbiAgICAvLyBjcmVhdGVNb2RlbFZpZXcoKSB7XHJcbiAgICAvLyAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgIC8vICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgIC8vICAgICAgICAgY29udGV4dDogXCJjb250ZXh0XCIsXHJcbiAgICAvLyAgICAgICAgIGZ1bGxzY3JlZW46IHRydWVcclxuICAgIC8vICAgICB9O1xyXG5cclxuICAgIC8vICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKTtcclxuICAgIFxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvL3RoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgLy90aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gdGhpcy5wYWdlLmlvcyA/IFwicmVzOi8vaG9tZWJnX2xkcGlfYXNpYS5wbmdcIiA6IFwicmVzOi8vaG9tZWJnX2xkcGlfYXNpYS5wbmdcIjtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuIl19