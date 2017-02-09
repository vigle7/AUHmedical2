"use strict";
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var status_bar_util_1 = require("./utils/status-bar-util");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    onMessageReceivedCallback: function (message) {
        alert(JSON.stringify(message));
        /*      console.log("Title: " + message.title);
              console.log("Body: " + message.body);*/
    }
});
status_bar_util_1.setStatusBarColors();
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlCQUE0QywrQkFBK0IsQ0FBQyxDQUFBO0FBRTVFLDJCQUEwQixjQUFjLENBQUMsQ0FBQTtBQUN6QyxnQ0FBbUMseUJBQXlCLENBQUMsQ0FBQTtBQUU3RCxJQUFPLFFBQVEsV0FBVyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXhELFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDWix5QkFBeUIsRUFBRSxVQUFTLE9BQU87UUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQztxREFDNkM7SUFFekMsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUdMLG9DQUFrQixFQUFFLENBQUM7QUFDckIsc0NBQTJCLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XHJcbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycyB9IGZyb20gXCIuL3V0aWxzL3N0YXR1cy1iYXItdXRpbFwiO1xyXG5cclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG4gIGZpcmViYXNlLmluaXQoe1xyXG4gICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgXHRhbGVydChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XHJcbi8qICAgICAgY29uc29sZS5sb2coXCJUaXRsZTogXCIgKyBtZXNzYWdlLnRpdGxlKTtcclxuICAgICAgY29uc29sZS5sb2coXCJCb2R5OiBcIiArIG1lc3NhZ2UuYm9keSk7Ki9cclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuc2V0U3RhdHVzQmFyQ29sb3JzKCk7XHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpOyJdfQ==