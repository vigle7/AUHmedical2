"use strict";
var core_1 = require("@angular/core");
var status_bar_util_1 = require("./utils/status-bar-util");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = (function () {
    function AppComponent() {
        status_bar_util_1.setStatusBarColors();
        firebase.login({
            type: firebase.LoginType.ANONYMOUS
        }).then(function (user) {
            firebase.getAuthToken({
                // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
                forceRefresh: false
            }).then(function (token) {
                firebase.addOnPushTokenReceivedCallback(function (tokenreal) {
                    console.log("real token retrieval: " + tokenreal);
                });
                console.log("Auth token retrieved: " + token);
            }, function (errorMessage) {
                console.log("Auth token retrieval error: " + errorMessage);
            });
            alert("User uid: " + user.uid);
        }, function (error) {
            alert("Trouble in paradise: " + error);
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<page-router-outlet></page-router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxnQ0FBbUMseUJBQXlCLENBQUMsQ0FBQTtBQUU3RCxJQUFPLFFBQVEsV0FBVyw4QkFBOEIsQ0FBQyxDQUFDO0FBTTFEO0lBQ0U7UUFDRSxvQ0FBa0IsRUFBRSxDQUFDO1FBRWYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVM7U0FDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFJVCxRQUFRLENBQUMsWUFBWSxDQUFDO2dCQUNwQixvR0FBb0c7Z0JBQ3BHLFlBQVksRUFBRSxLQUFLO2FBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxLQUFLO2dCQU1QLFFBQVEsQ0FBQyw4QkFBOEIsQ0FDckMsVUFBUyxTQUFTO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBQzFELENBQUMsQ0FDRixDQUFDO2dCQU1SLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxFQUNELFVBQVUsWUFBWTtnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUM3RCxDQUFDLENBQ0osQ0FBQztZQUtGLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxLQUFLLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFHWCxDQUFDO0lBbERIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSwyQ0FBMkM7U0FDdEQsQ0FBQzs7b0JBQUE7SUFnREYsbUJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBL0NZLG9CQUFZLGVBK0N4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgc2V0U3RhdHVzQmFyQ29sb3JzIH0gZnJvbSBcIi4vdXRpbHMvc3RhdHVzLWJhci11dGlsXCI7XHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1haW5cIixcclxuICB0ZW1wbGF0ZTogXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc2V0U3RhdHVzQmFyQ29sb3JzKCk7XHJcblxyXG4gICAgICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5BTk9OWU1PVVNcclxuICAgICAgICAgIH0pLnRoZW4oKHVzZXIpID0+IHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICBmaXJlYmFzZS5nZXRBdXRoVG9rZW4oe1xyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBmYWxzZSwgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0byB0cnVlIGJ5IEZpcmViYXNlIGJ1dCBleHBvc2VkIGZvciB7Tn0gZGV2cyBub25ldGhlbGVzcyA6KVxyXG4gICAgICAgICAgICAgICAgZm9yY2VSZWZyZXNoOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0b2tlbikge1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuYWRkT25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odG9rZW5yZWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVhbCB0b2tlbiByZXRyaWV2YWw6IFwiICsgdG9rZW5yZWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmFsIGVycm9yOiBcIiArIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICBhbGVydChcIlVzZXIgdWlkOiBcIiArIHVzZXIudWlkKTtcclxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiVHJvdWJsZSBpbiBwYXJhZGlzZTogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcblxyXG4gIH1cclxufVxyXG4iXX0=