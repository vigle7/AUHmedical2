"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var forms_2 = require('@angular/forms');
var router_1 = require("nativescript-angular/router");
var store_1 = require('@ngrx/store');
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var datePickerReducer_1 = require('./reducer/datePickerReducer');
var angular_1 = require("nativescript-telerik-ui-pro/sidedrawer/angular");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
                forms_2.ReactiveFormsModule,
                store_1.StoreModule.provideStore({ dateData: datePickerReducer_1.datePickerReducer })
            ],
            declarations: [
                angular_1.SIDEDRAWER_DIRECTIVES,
                app_component_1.AppComponent
            ].concat(app_routing_1.navigatableComponents),
            entryComponents: app_routing_1.navigatableComponents.slice(),
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBHQUEwRztBQUMxRyx5QkFBbUMsK0JBQStCLENBQUMsQ0FBQTtBQUluRSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsc0JBQXdDLDRCQUE0QixDQUFDLENBQUE7QUFDckUscUJBQXVDLDJCQUEyQixDQUFDLENBQUE7QUFDbkUsc0JBQW9DLGdCQUFnQixDQUFDLENBQUE7QUFDckQsdUJBQXlDLDZCQUE2QixDQUFDLENBQUE7QUFDdkUsc0JBQTRCLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDRCQUE4QyxlQUFlLENBQUMsQ0FBQTtBQUM5RCxrQ0FBa0MsNkJBQTZCLENBQUMsQ0FBQTtBQUNoRSx3QkFBc0MsZ0RBQWdELENBQUMsQ0FBQTtBQXVCdkY7SUFBQTtJQUF3QixDQUFDO0lBckJ6QjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCw2QkFBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2dCQUN4QywyQkFBbUI7Z0JBQ25CLG1CQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLHFDQUFpQixFQUFFLENBQUM7YUFDMUQ7WUFFRCxZQUFZLEVBQUU7Z0JBQ2QsK0JBQXFCO2dCQUNyQiw0QkFBWTtxQkFDUCxtQ0FBcUIsQ0FDekI7WUFDRCxlQUFlLEVBQ1osbUNBQXFCLFFBQ3ZCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDOztpQkFBQTtJQUNzQixnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixpQkFBUyxZQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgZGF0ZVBpY2tlclJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvZGF0ZVBpY2tlclJlZHVjZXInO1xyXG5pbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZSh7IGRhdGVEYXRhOiBkYXRlUGlja2VyUmVkdWNlciB9KVxyXG4gIF0sXHJcblxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gIFNJREVEUkFXRVJfRElSRUNUSVZFUyxcclxuICBBcHBDb21wb25lbnQsXHJcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHMsXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIl19