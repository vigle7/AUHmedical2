import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";


import firebase = require("nativescript-plugin-firebase");

  firebase.init({
    onMessageReceivedCallback: function(message) {
    	alert(JSON.stringify(message));
/*      console.log("Title: " + message.title);
      console.log("Body: " + message.body);*/

    }
  });


//setStatusBarColors();
platformNativeScriptDynamic({startPageActionBarHidden: false}).bootstrapModule(AppModule);