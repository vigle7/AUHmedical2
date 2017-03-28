import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { View } from "ui/core/view";
const appSettings = require("application-settings");

const Toast = require("nativescript-toast");
const fetchModule = require("fetch");
const xmlModule = require("xml");

@Component({
  selector: "login",

  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class LoginComponent implements OnInit {

	@ViewChild("CB") signatureCheckBox: ElementRef;
      private id:string;
      private password:string;
      private xmlToJsonResult:Array<string>=[];
      private showLogin:boolean;

  constructor(private router: Router,  private page: Page) {

  }

  ngOnInit() {

        if(appSettings.getString("id")!==undefined && appSettings.getString("password")!==undefined&&appSettings.getBoolean("checked")!==undefined){
          this.id = appSettings.getString("id");
          this.password = appSettings.getString("password");
          this.signatureCheckBox.nativeElement.checked = appSettings.getBoolean("checked");
        }

        this.showLogin = true;

    //this.page.actionBar.title = "申請會員";
    //this.page.actionBarHidden = true;
    //this.page.backgroundImage = this.page.ios ? "res://homebg_ldpi_asia.png" : "res://homebg_ldpi_asia.png";
  }



  login() {

                this.showLogin = false;

                this.xmlToJsonResult = [];

                let details = {
                                'member_id': this.id,
                                'member_passwd': this.password,
                                'hospno': 22,
                                'tokentype': 'D2',
                                'WSPassword': 'appmobile_cmuh',
                                'WSuserid': 'cmuh_appmobile',
                                'tokenid':'APA91bHd_8dywVKLPMsCk4jgv0MRisi-4paYhIx4Y0EaudERFNG7w_QWnzPih7LPncaGzoNbVHUXxRz0FrqNJEbtT2tvvHhGB1vwSgxPyWfBwvj7T3GaK5VlyzyCyRgXf6tYcibN7F_M'


                            };

                            let formBody = [];
                            for (let property in details) {
                              let encodedKey = encodeURIComponent(property);
                              let encodedValue = encodeURIComponent(details[property]);
                              formBody.push(encodedKey + "=" + encodedValue);
                            }
                           let bodyString = formBody.join("&");

          // var data = encodeURI("member_id=this.id&member_passwd=this.password&hospno=22&tokentype=D2&WSPassword=appmobile_cmuh&WSuserid=cmuh_appmobile&tokenid=APA91bHd_8dywVKLPMsCk4jgv0MRisi-4paYhIx4Y0EaudERFNG7w_QWnzPih7LPncaGzoNbVHUXxRz0FrqNJEbtT2tvvHhGB1vwSgxPyWfBwvj7T3GaK5VlyzyCyRgXf6tYcibN7F_M");


        //fetch("http://122.146.168.11/AppWebService/AppService.asmx/ChkAppMemberPassWord"
        //回傳
        //    0:失敗，密碼錯誤或非會員或為停用
        //    1:成功，且密碼不需更改
        //    2:成功，且密碼需重新修改(第一次使用或六個月需重設密碼)                
        //第二個回傳 陳先生 許小姐
        //1031217先保留email 先傳是否為社區醫學部的醫療群病患,如果是則回傳1,其餘皆視為非
        //第三個回傳 亞大帳號 email
        //第四個回傳 病歷號
            fetchModule.fetch("http://122.146.168.11/AppWebService/AppService.asmx/ChkAppMemberPassWord", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: bodyString
            }).then((response)=> {

                //console.log(response._bodyText);

                //this.result = [];
                this.showLogin = true;

                let xmlParser = new xmlModule.XmlParser(this.onEventCallback, this.onErrorCallback,true);
                xmlParser.parse(response._bodyText);



                  console.log("result:"+this.xmlToJsonResult);
    

                if(this.xmlToJsonResult[0]==="1"){
                  let toast = Toast.makeText("登入成功");
                  toast.show();
                  this.router.navigate(["/menu"]);

                  global.loginResponse.authResult = this.xmlToJsonResult[0];
                  global.loginResponse.accountName = this.xmlToJsonResult[1];
                  global.loginResponse.familyMember = this.xmlToJsonResult[2];
                  global.loginResponse.accoutMemberNo = this.xmlToJsonResult[3];
                }

                if(this.xmlToJsonResult[0]==="0"){
                  let toast = Toast.makeText("登入失敗");
                  toast.show();
                  global.loginResponse.authResult = this.xmlToJsonResult[0];
                  return
                }


                if(this.signatureCheckBox.nativeElement.checked){
                    appSettings.setString("id", this.id);
                    appSettings.setString("password", this.password);
                    appSettings.setBoolean("checked", true);

                }else{

                  if(appSettings.getString("id")===undefined || appSettings.getString("password")===undefined&&appSettings.getBoolean("checked")!==undefined){
                    return
                  }

                  appSettings.remove("id");
                  appSettings.remove("password");
                  appSettings.remove("checked");
                  
                }

             }, (error) =>{
                this.showLogin = true;
                console.log(error);
            });


  }
  

  onEventCallback =  (event)=> {


      switch (event.eventType) {


          case xmlModule.ParserEventType.Text:
              let significantText = event.data.trim();
            if (significantText !== "" && significantText !==undefined) {
                  this.xmlToJsonResult.push(significantText);

                      //console.log(that.result);
                      //console.log("type of :" +typeof significantText)
              }
              break;

      }
  };

  onErrorCallback = (error: Error)=> {
      console.log("Error: " + error.message);
  };


}
