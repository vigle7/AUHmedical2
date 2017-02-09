import { Component } from "@angular/core";
import { setStatusBarColors } from "./utils/status-bar-util";

import firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
  constructor() {
    setStatusBarColors();

          firebase.login({
              type: firebase.LoginType.ANONYMOUS
          }).then((user) => {



              firebase.getAuthToken({
                // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
                forceRefresh: false
              }).then(
                  function (token) {





                          firebase.addOnPushTokenReceivedCallback(
                            function(tokenreal) {
                                    console.log("real token retrieval: " + tokenreal);
                            }
                          );





                    console.log("Auth token retrieved: " + token);
                  },
                  function (errorMessage) {
                    console.log("Auth token retrieval error: " + errorMessage);
                  }
              );




              alert("User uid: " + user.uid);
          }, (error) => {
              alert("Trouble in paradise: " + error);
          });


  }
}
