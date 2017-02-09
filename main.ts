import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { setStatusBarColors } from "./utils/status-bar-util";

import firebase = require("nativescript-plugin-firebase");

  firebase.init({
    onMessageReceivedCallback: function(message) {
    	alert(JSON.stringify(message));
/*      console.log("Title: " + message.title);
      console.log("Body: " + message.body);*/

    }
  });


setStatusBarColors();
platformNativeScriptDynamic().bootstrapModule(AppModule);