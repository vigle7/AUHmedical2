import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import * as LocalNotifications from "nativescript-local-notifications";

import firebase = require("nativescript-plugin-firebase");
const Toast = require("nativescript-toast");
import * as dialogs from "ui/dialogs";
const appSettings = require("application-settings");


  global.loginResponse = {
                          'authResult':'0',
                          'accountName':'',      
                          'familyMember':'',    
                          'accoutMemberNo':'',  //若病人在亞大為病歷號，否則為身分證前面加X
                          'member_id':'',
                          'member_passwd':'',
                          'tokenid':'',
                    　  };

  firebase.init({  
    onPushTokenReceivedCallback: function(token) {
      global.loginResponse.tokenid = token;
    },
    //在foreground才會執行  backgorund只有通知列的通知
    onMessageReceivedCallback: function(message) {

      if(message.title===null || message.title===undefined || message.title===""){
        return
      }

            LocalNotifications.hasPermission().then(
                (granted)=>{
                  if(!granted){ //apple沒有推播權限，發出請求權限通知 (android推播不需權限所以grant一定是true，只針對apple)
                          return LocalNotifications.requestPermission();
                  }else{

                          dialogs.alert({ 
                              message: message.body+"\n\n (訊息保留於上方通知列)",
                              okButtonText: "確定"
                          });

                          LocalNotifications.schedule([{
                          title: message.title,
                          body: message.body,
                          sound: null, // suppress the default sound
                        }]).then(
                            function() {
                              console.log("Notification scheduled");
                            },
                            function(error) {
                              console.log("scheduling error: " + error);
                            }
                        )
                      return Promise.resolve(true);
                  }
                }
            ).then(
                (granted)=>{
                  if(!granted){ //請求權限被拒
                      let toast = Toast.makeText("通知權限請至設定開啟", "long");
                      toast.show();
                  }
                })
    }

  });


  // if(appSettings.getString("tokenid")!==undefined){
  //   global.loginResponse.tokenid = appSettings.getString("tokenid");
  //   alert(global.loginResponse.tokenid);
  // }

platformNativeScriptDynamic({startPageActionBarHidden: false}).bootstrapModule(AppModule);