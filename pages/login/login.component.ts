import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { View } from "ui/core/view";
import observable = require("data/observable");
const appSettings = require("application-settings");

const Toast = require("nativescript-toast");
const fetchModule = require("fetch");
const xmlModule = require("xml");
const dialogs = require("ui/dialogs");

@Component({
  selector: "login",

  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class LoginComponent implements OnInit {

	@ViewChild("CB") signatureCheckBox: ElementRef;
      private id:string;
      private password:any;

      private xmlToJsonResult:Array<string>=[];
      private showLogin:boolean;

      private newPassword:any = new observable.Observable();


  constructor(private router: Router,  private page: Page) {

  }

  ngOnInit() {

    
        this.newPassword.set("Password", "");
        this.newPassword.addEventListener(observable.Observable.propertyChangeEvent,  (pcd: observable.PropertyChangeData)=> {

        this.showLogin = false;

        let details = {
            'member_id': this.id,
            'newpasswd': pcd.value.toString() ,
            'hospno': 22,
            'WSPassword': 'appmobile_cmuh',
            'WSuserid': 'cmuh_appmobile',
        };

        let formBody = [];
        for (let property in details) {
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        let bodyString = formBody.join("&");

            fetchModule.fetch("http://122.146.168.11/AppWebService/AppService.asmx/ModifyAppMemberPassWord", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: bodyString
            }).then((response)=> {
                this.showLogin = true;
                let toast = Toast.makeText("更新密碼成功");
                toast.show();
                this.password = pcd.value.toString();
                this.router.navigate(["/menu"]);
                global.loginResponse.authResult = this.xmlToJsonResult[0];
                global.loginResponse.accountName = this.xmlToJsonResult[1];
                global.loginResponse.familyMember = this.xmlToJsonResult[2];
                global.loginResponse.accoutMemberNo = this.xmlToJsonResult[3];
                global.loginResponse.member_id = this.id;
                global.loginResponse.member_passwd = this.password;
                this.setCheckbox();
            }, (error) =>{
                this.showLogin = true;
                console.log(error);
                let toast = Toast.makeText("更新密碼失敗");
                toast.show();
            });

        });

        if(appSettings.getString("id")!==undefined && appSettings.getString("password")!==undefined&&appSettings.getBoolean("checked")!==undefined){
          this.id = appSettings.getString("id");
          this.password = appSettings.getString("password");
          this.signatureCheckBox.nativeElement.checked = appSettings.getBoolean("checked");
        }

        this.showLogin = true;

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
                                'tokenid':global.loginResponse.tokenid
                            };

                            let formBody = [];
                            for (let property in details) {
                              let encodedKey = encodeURIComponent(property);
                              let encodedValue = encodeURIComponent(details[property]);
                              formBody.push(encodedKey + "=" + encodedValue);
                            }
                           let bodyString = formBody.join("&");



        //fetch("http://122.146.168.11/AppWebService/AppService.asmx/ChkAppMemberPassWord"
        //第一個回傳
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





                    if(this.xmlToJsonResult[0]==="2"){
                      let toast = Toast.makeText("請更新密碼");
                          toast.show();

                          dialogs.prompt({

                              title: "密碼變更",
                              message: "請輸入新密碼",
                              okButtonText: "確定",
                              neutralButtonText: "取消",
                              defaultText: "",
                              inputType: dialogs.inputType.password
                                }).then(r => {

                                if(r.result===undefined){ //點選取消
                                  return
                                }

                                this.newPassword.set("Password", r.text);

                                });
                    }

         

                    if(this.xmlToJsonResult[0]==="1"){
                      let toast = Toast.makeText("登入成功");
                      toast.show();
                      this.router.navigate(["/menu"]);

                      global.loginResponse.authResult = this.xmlToJsonResult[0];
                      global.loginResponse.accountName = this.xmlToJsonResult[1];
                      global.loginResponse.familyMember = this.xmlToJsonResult[2];
                      global.loginResponse.accoutMemberNo = this.xmlToJsonResult[3];
                      global.loginResponse.member_id = this.id;
                      global.loginResponse.member_passwd = this.password;
                      this.setCheckbox();
                    }

                    if(this.xmlToJsonResult[0]==="0"){
                      let toast = Toast.makeText("登入失敗");
                      toast.show();
                      global.loginResponse.authResult = this.xmlToJsonResult[0];
                      return
                    }


                  

                }, (error) =>{
                    this.showLogin = true;
                    console.log(error);
                });


  }


  setCheckbox =  ()=> {
    
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
  };
  

  onEventCallback =  (event)=> {


      switch (event.eventType) {


          case xmlModule.ParserEventType.Text:
              let significantText = event.data.trim();
            if (significantText !== "" && significantText !==undefined) {
                  this.xmlToJsonResult.push(significantText);

              }
              break;

      }
  };

  onErrorCallback = (error: Error)=> {
      console.log("Error: " + error.message);
  };


}
