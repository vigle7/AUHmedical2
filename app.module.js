"use strict";
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var store_1 = require('@ngrx/store');
var forms_2 = require('@angular/forms');
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var datePickerReducer_1 = require('./reducer/datePickerReducer');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlCQUFtQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ25FLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxzQkFBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSxxQkFBdUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNuRSx1QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUN2RSxzQkFBNEIsYUFBYSxDQUFDLENBQUE7QUFDMUMsc0JBQW9DLGdCQUFnQixDQUFDLENBQUE7QUFFckQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsNEJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELGtDQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBdUJoRTtJQUFBO0lBQXdCLENBQUM7SUFwQnpCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLDZCQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7Z0JBQ3hDLDJCQUFtQjtnQkFDbkIsbUJBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUscUNBQWlCLEVBQUUsQ0FBQzthQUMxRDtZQUVELFlBQVksRUFBRTtnQkFDZCw0QkFBWTtxQkFDUCxtQ0FBcUIsQ0FDekI7WUFDRCxlQUFlLEVBQ1osbUNBQXFCLFFBQ3ZCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDOztpQkFBQTtJQUNzQixnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixpQkFBUyxZQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBkYXRlUGlja2VyUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9kYXRlUGlja2VyUmVkdWNlcic7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZSh7IGRhdGVEYXRhOiBkYXRlUGlja2VyUmVkdWNlciB9KVxyXG4gIF0sXHJcblxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gIEFwcENvbXBvbmVudCxcclxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50cyxcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c1xyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iXX0=