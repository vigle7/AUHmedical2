"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var observable = require("data/observable");
var appSettings = require("application-settings");
var Toast = require("nativescript-toast");
var fetchModule = require("fetch");
var xmlModule = require("xml");
var dialogs = require("ui/dialogs");
var LoginComponent = (function () {
    function LoginComponent(router, page) {
        var _this = this;
        this.router = router;
        this.page = page;
        this.xmlToJsonResult = [];
        this.newPassword = new observable.Observable();
        this.setCheckbox = function () {
            if (_this.signatureCheckBox.nativeElement.checked) {
                appSettings.setString("id", _this.id);
                appSettings.setString("password", _this.password);
                appSettings.setBoolean("checked", true);
            }
            else {
                if (appSettings.getString("id") === undefined || appSettings.getString("password") === undefined && appSettings.getBoolean("checked") !== undefined) {
                    return;
                }
                appSettings.remove("id");
                appSettings.remove("password");
                appSettings.remove("checked");
            }
        };
        this.onEventCallback = function (event) {
            switch (event.eventType) {
                case xmlModule.ParserEventType.Text:
                    var significantText = event.data.trim();
                    if (significantText !== "" && significantText !== undefined) {
                        _this.xmlToJsonResult.push(significantText);
                    }
                    break;
            }
        };
        this.onErrorCallback = function (error) {
            console.log("Error: " + error.message);
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newPassword.set("Password", "");
        this.newPassword.addEventListener(observable.Observable.propertyChangeEvent, function (pcd) {
            _this.showLogin = false;
            var details = {
                'member_id': _this.id,
                'newpasswd': pcd.value.toString(),
                'hospno': 22,
                'WSPassword': 'appmobile_cmuh',
                'WSuserid': 'cmuh_appmobile',
            };
            var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            var bodyString = formBody.join("&");
            fetchModule.fetch("http://122.146.168.11/AppWebService/AppService.asmx/ModifyAppMemberPassWord", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: bodyString
            }).then(function (response) {
                _this.showLogin = true;
                var toast = Toast.makeText("更新密碼成功");
                toast.show();
                _this.password = pcd.value.toString();
                _this.router.navigate(["/menu"]);
                global.loginResponse.authResult = _this.xmlToJsonResult[0];
                global.loginResponse.accountName = _this.xmlToJsonResult[1];
                global.loginResponse.familyMember = _this.xmlToJsonResult[2];
                global.loginResponse.accoutMemberNo = _this.xmlToJsonResult[3];
                global.loginResponse.member_id = _this.id;
                global.loginResponse.member_passwd = _this.password;
                _this.setCheckbox();
            }, function (error) {
                _this.showLogin = true;
                console.log(error);
                var toast = Toast.makeText("更新密碼失敗");
                toast.show();
            });
        });
        if (appSettings.getString("id") !== undefined && appSettings.getString("password") !== undefined && appSettings.getBoolean("checked") !== undefined) {
            this.id = appSettings.getString("id");
            this.password = appSettings.getString("password");
            this.signatureCheckBox.nativeElement.checked = appSettings.getBoolean("checked");
        }
        this.showLogin = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.showLogin = false;
        this.xmlToJsonResult = [];
        var details = {
            'member_id': this.id,
            'member_passwd': this.password,
            'hospno': 22,
            'tokentype': 'D2',
            'WSPassword': 'appmobile_cmuh',
            'WSuserid': 'cmuh_appmobile',
            'tokenid': global.loginResponse.tokenid
        };
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        var bodyString = formBody.join("&");
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
        }).then(function (response) {
            //console.log(response._bodyText);
            //this.result = [];
            _this.showLogin = true;
            var xmlParser = new xmlModule.XmlParser(_this.onEventCallback, _this.onErrorCallback, true);
            xmlParser.parse(response._bodyText);
            if (_this.xmlToJsonResult[0] === "2") {
                var toast = Toast.makeText("請更新密碼");
                toast.show();
                dialogs.prompt({
                    title: "密碼變更",
                    message: "請輸入新密碼",
                    okButtonText: "確定",
                    neutralButtonText: "取消",
                    defaultText: "",
                    inputType: dialogs.inputType.password
                }).then(function (r) {
                    if (r.result === undefined) {
                        return;
                    }
                    _this.newPassword.set("Password", r.text);
                });
            }
            if (_this.xmlToJsonResult[0] === "1") {
                var toast = Toast.makeText("登入成功");
                toast.show();
                _this.router.navigate(["/menu"]);
                global.loginResponse.authResult = _this.xmlToJsonResult[0];
                global.loginResponse.accountName = _this.xmlToJsonResult[1];
                global.loginResponse.familyMember = _this.xmlToJsonResult[2];
                global.loginResponse.accoutMemberNo = _this.xmlToJsonResult[3];
                global.loginResponse.member_id = _this.id;
                global.loginResponse.member_passwd = _this.password;
                _this.setCheckbox();
            }
            if (_this.xmlToJsonResult[0] === "0") {
                var toast = Toast.makeText("登入失敗");
                toast.show();
                global.loginResponse.authResult = _this.xmlToJsonResult[0];
                return;
            }
        }, function (error) {
            _this.showLogin = true;
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild("CB"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "signatureCheckBox", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUQsZUFBZSxDQUFDLENBQUE7QUFDekUsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMscUJBQXFCLFNBQVMsQ0FBQyxDQUFBO0FBRy9CLElBQU8sVUFBVSxXQUFXLGlCQUFpQixDQUFDLENBQUM7QUFDL0MsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFcEQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDNUMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFRdEM7SUFZRSx3QkFBb0IsTUFBYyxFQUFXLElBQVU7UUFaekQsaUJBd09DO1FBNU5xQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVcsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU4zQyxvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUdqQyxnQkFBVyxHQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBb0wxRCxnQkFBVyxHQUFJO1lBRVQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO2dCQUM3QyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFNUMsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUVKLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUcsU0FBUyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUcsU0FBUyxJQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUcsU0FBUyxDQUFDLENBQUEsQ0FBQztvQkFDMUksTUFBTSxDQUFBO2dCQUNSLENBQUM7Z0JBRUQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0IsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVoQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO1FBR0Ysb0JBQWUsR0FBSSxVQUFDLEtBQUs7WUFHckIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBR3RCLEtBQUssU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJO29CQUMvQixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMxQyxFQUFFLENBQUMsQ0FBQyxlQUFlLEtBQUssRUFBRSxJQUFJLGVBQWUsS0FBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFFL0MsQ0FBQztvQkFDRCxLQUFLLENBQUM7WUFFZCxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsb0JBQWUsR0FBRyxVQUFDLEtBQVk7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQztJQXZORixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQTBEQztRQXZESyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFHLFVBQUMsR0FBa0M7WUFFakgsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFdkIsSUFBSSxPQUFPLEdBQUc7Z0JBQ1YsV0FBVyxFQUFFLEtBQUksQ0FBQyxFQUFFO2dCQUNwQixXQUFXLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pDLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFlBQVksRUFBRSxnQkFBZ0I7Z0JBQzlCLFVBQVUsRUFBRSxnQkFBZ0I7YUFDL0IsQ0FBQztZQUVGLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxZQUFZLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVoQyxXQUFXLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxFQUFFO2dCQUM3RixNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUU7Z0JBQ2hFLElBQUksRUFBRSxVQUFVO2FBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO2dCQUNiLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNyQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsVUFBQyxLQUFLO2dCQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUcsU0FBUyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUcsU0FBUyxJQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUcsU0FBUyxDQUFDLENBQUEsQ0FBQztZQUMxSSxJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkYsQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBRTVCLENBQUM7SUFJRCw4QkFBSyxHQUFMO1FBQUEsaUJBNEdDO1FBMUdhLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBRTFCLElBQUksT0FBTyxHQUFHO1lBQ0UsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ3BCLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUM5QixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFlBQVksRUFBRSxnQkFBZ0I7WUFDOUIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixTQUFTLEVBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPO1NBQ3pDLENBQUM7UUFFRixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxJQUFJLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6RCxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNGLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJdkQsa0ZBQWtGO1FBQ2xGLE9BQU87UUFDUCx1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLG1EQUFtRDtRQUNuRCxlQUFlO1FBQ2YsaURBQWlEO1FBQ2pELGtCQUFrQjtRQUNsQixXQUFXO1FBQ0gsV0FBVyxDQUFDLEtBQUssQ0FBQywwRUFBMEUsRUFBRTtZQUMxRixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxtQ0FBbUMsRUFBRTtZQUNoRSxJQUFJLEVBQUUsVUFBVTtTQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUViLGtDQUFrQztZQUVsQyxtQkFBbUI7WUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFFdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsQ0FBQztZQUN6RixTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQU1wQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ2hDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFYixPQUFPLENBQUMsTUFBTSxDQUFDO29CQUVYLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxRQUFRO29CQUNqQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsV0FBVyxFQUFFLEVBQUU7b0JBQ2YsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUTtpQkFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7b0JBRVQsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxTQUFTLENBQUMsQ0FBQSxDQUFDO3dCQUN2QixNQUFNLENBQUE7b0JBQ1IsQ0FBQztvQkFFRCxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV6QyxDQUFDLENBQUMsQ0FBQztZQUNmLENBQUM7WUFJRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ2hDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDYixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBRWhDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQixDQUFDO1lBRUQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBRyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUNoQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsTUFBTSxDQUFBO1lBQ1IsQ0FBQztRQUtMLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBR2pCLENBQUM7SUF4TEY7UUFBQyxnQkFBUyxDQUFDLElBQUksQ0FBQzs7NkRBQUE7SUFSakI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFFakIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUNyRSxDQUFDOztzQkFBQTtJQXlPRixxQkFBQztBQUFELENBQUMsQUF4T0QsSUF3T0M7QUF4T1ksc0JBQWMsaUJBd08xQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IG9ic2VydmFibGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbmNvbnN0IFRvYXN0ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b2FzdFwiKTtcbmNvbnN0IGZldGNoTW9kdWxlID0gcmVxdWlyZShcImZldGNoXCIpO1xuY29uc3QgeG1sTW9kdWxlID0gcmVxdWlyZShcInhtbFwiKTtcbmNvbnN0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxvZ2luXCIsXG5cbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKFwiQ0JcIikgc2lnbmF0dXJlQ2hlY2tCb3g6IEVsZW1lbnRSZWY7XG4gICAgICBwcml2YXRlIGlkOnN0cmluZztcbiAgICAgIHByaXZhdGUgcGFzc3dvcmQ6YW55O1xuXG4gICAgICBwcml2YXRlIHhtbFRvSnNvblJlc3VsdDpBcnJheTxzdHJpbmc+PVtdO1xuICAgICAgcHJpdmF0ZSBzaG93TG9naW46Ym9vbGVhbjtcblxuICAgICAgcHJpdmF0ZSBuZXdQYXNzd29yZDphbnkgPSBuZXcgb2JzZXJ2YWJsZS5PYnNlcnZhYmxlKCk7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgXG4gICAgICAgIHRoaXMubmV3UGFzc3dvcmQuc2V0KFwiUGFzc3dvcmRcIiwgXCJcIik7XG4gICAgICAgIHRoaXMubmV3UGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihvYnNlcnZhYmxlLk9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCwgIChwY2Q6IG9ic2VydmFibGUuUHJvcGVydHlDaGFuZ2VEYXRhKT0+IHtcblxuICAgICAgICB0aGlzLnNob3dMb2dpbiA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBkZXRhaWxzID0ge1xuICAgICAgICAgICAgJ21lbWJlcl9pZCc6IHRoaXMuaWQsXG4gICAgICAgICAgICAnbmV3cGFzc3dkJzogcGNkLnZhbHVlLnRvU3RyaW5nKCkgLFxuICAgICAgICAgICAgJ2hvc3Bubyc6IDIyLFxuICAgICAgICAgICAgJ1dTUGFzc3dvcmQnOiAnYXBwbW9iaWxlX2NtdWgnLFxuICAgICAgICAgICAgJ1dTdXNlcmlkJzogJ2NtdWhfYXBwbW9iaWxlJyxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZm9ybUJvZHkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gZGV0YWlscykge1xuICAgICAgICAgIGxldCBlbmNvZGVkS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5KTtcbiAgICAgICAgICBsZXQgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KGRldGFpbHNbcHJvcGVydHldKTtcbiAgICAgICAgICBmb3JtQm9keS5wdXNoKGVuY29kZWRLZXkgKyBcIj1cIiArIGVuY29kZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJvZHlTdHJpbmcgPSBmb3JtQm9keS5qb2luKFwiJlwiKTtcblxuICAgICAgICAgICAgZmV0Y2hNb2R1bGUuZmV0Y2goXCJodHRwOi8vMTIyLjE0Ni4xNjguMTEvQXBwV2ViU2VydmljZS9BcHBTZXJ2aWNlLmFzbXgvTW9kaWZ5QXBwTWVtYmVyUGFzc1dvcmRcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICAgICAgICAgICAgYm9keTogYm9keVN0cmluZ1xuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvZ2luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdG9hc3QgPSBUb2FzdC5tYWtlVGV4dChcIuabtOaWsOWvhueivOaIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBjZC52YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tZW51XCJdKTtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9naW5SZXNwb25zZS5hdXRoUmVzdWx0ID0gdGhpcy54bWxUb0pzb25SZXN1bHRbMF07XG4gICAgICAgICAgICAgICAgZ2xvYmFsLmxvZ2luUmVzcG9uc2UuYWNjb3VudE5hbWUgPSB0aGlzLnhtbFRvSnNvblJlc3VsdFsxXTtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9naW5SZXNwb25zZS5mYW1pbHlNZW1iZXIgPSB0aGlzLnhtbFRvSnNvblJlc3VsdFsyXTtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9naW5SZXNwb25zZS5hY2NvdXRNZW1iZXJObyA9IHRoaXMueG1sVG9Kc29uUmVzdWx0WzNdO1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2dpblJlc3BvbnNlLm1lbWJlcl9pZCA9IHRoaXMuaWQ7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLmxvZ2luUmVzcG9uc2UubWVtYmVyX3Bhc3N3ZCA9IHRoaXMucGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDaGVja2JveCgpO1xuICAgICAgICAgICAgfSwgKGVycm9yKSA9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2dpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGxldCB0b2FzdCA9IFRvYXN0Lm1ha2VUZXh0KFwi5pu05paw5a+G56K85aSx5pWXXCIpO1xuICAgICAgICAgICAgICAgIHRvYXN0LnNob3coKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImlkXCIpIT09dW5kZWZpbmVkICYmIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBhc3N3b3JkXCIpIT09dW5kZWZpbmVkJiZhcHBTZXR0aW5ncy5nZXRCb29sZWFuKFwiY2hlY2tlZFwiKSE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgdGhpcy5pZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImlkXCIpO1xuICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwYXNzd29yZFwiKTtcbiAgICAgICAgICB0aGlzLnNpZ25hdHVyZUNoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IGFwcFNldHRpbmdzLmdldEJvb2xlYW4oXCJjaGVja2VkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93TG9naW4gPSB0cnVlO1xuXG4gIH1cblxuXG5cbiAgbG9naW4oKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2dpbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy54bWxUb0pzb25SZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgICAgIGxldCBkZXRhaWxzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWVtYmVyX2lkJzogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lbWJlcl9wYXNzd2QnOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zcG5vJzogMjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b2tlbnR5cGUnOiAnRDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnV1NQYXNzd29yZCc6ICdhcHBtb2JpbGVfY211aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdXU3VzZXJpZCc6ICdjbXVoX2FwcG1vYmlsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b2tlbmlkJzpnbG9iYWwubG9naW5SZXNwb25zZS50b2tlbmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtQm9keSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIGRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmNvZGVkS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoZGV0YWlsc1twcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUJvZHkucHVzaChlbmNvZGVkS2V5ICsgXCI9XCIgKyBlbmNvZGVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib2R5U3RyaW5nID0gZm9ybUJvZHkuam9pbihcIiZcIik7XG5cblxuXG4gICAgICAgIC8vZmV0Y2goXCJodHRwOi8vMTIyLjE0Ni4xNjguMTEvQXBwV2ViU2VydmljZS9BcHBTZXJ2aWNlLmFzbXgvQ2hrQXBwTWVtYmVyUGFzc1dvcmRcIlxuICAgICAgICAvL+esrOS4gOWAi+WbnuWCs1xuICAgICAgICAvLyAgICAwOuWkseaVl++8jOWvhueivOmMr+iqpOaIlumdnuacg+WToeaIlueCuuWBnOeUqFxuICAgICAgICAvLyAgICAxOuaIkOWKn++8jOS4lOWvhueivOS4jemcgOabtOaUuVxuICAgICAgICAvLyAgICAyOuaIkOWKn++8jOS4lOWvhueivOmcgOmHjeaWsOS/ruaUuSjnrKzkuIDmrKHkvb/nlKjmiJblha3lgIvmnIjpnIDph43oqK3lr4bnorwpICAgICAgICAgICAgICAgIFxuICAgICAgICAvL+esrOS6jOWAi+WbnuWCsyDpmbPlhYjnlJ8g6Kix5bCP5aeQXG4gICAgICAgIC8vMTAzMTIxN+WFiOS/neeVmWVtYWlsIOWFiOWCs+aYr+WQpueCuuekvuWNgOmGq+WtuOmDqOeahOmGq+eZgue+pOeXheaCoyzlpoLmnpzmmK/liYflm57lgrMxLOWFtumkmOeahuimlueCuumdnlxuICAgICAgICAvL+esrOS4ieWAi+WbnuWCsyDkup7lpKfluLPomZ8gZW1haWxcbiAgICAgICAgLy/nrKzlm5vlgIvlm57lgrMg55eF5q236JmfXG4gICAgICAgICAgICAgICAgZmV0Y2hNb2R1bGUuZmV0Y2goXCJodHRwOi8vMTIyLjE0Ni4xNjguMTEvQXBwV2ViU2VydmljZS9BcHBTZXJ2aWNlLmFzbXgvQ2hrQXBwTWVtYmVyUGFzc1dvcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keVN0cmluZ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKT0+IHtcblxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLl9ib2R5VGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2dpbiA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHhtbFBhcnNlciA9IG5ldyB4bWxNb2R1bGUuWG1sUGFyc2VyKHRoaXMub25FdmVudENhbGxiYWNrLCB0aGlzLm9uRXJyb3JDYWxsYmFjayx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgeG1sUGFyc2VyLnBhcnNlKHJlc3BvbnNlLl9ib2R5VGV4dCk7XG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnhtbFRvSnNvblJlc3VsdFswXT09PVwiMlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9hc3QgPSBUb2FzdC5tYWtlVGV4dChcIuiri+abtOaWsOWvhueivFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Quc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi5a+G56K86K6K5pu0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuiri+i8uOWFpeaWsOWvhueivFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIueiuuWumlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwi5Y+W5raIXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyLnJlc3VsdD09PXVuZGVmaW5lZCl7IC8v6bue6YG45Y+W5raIXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1Bhc3N3b3JkLnNldChcIlBhc3N3b3JkXCIsIHIudGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy54bWxUb0pzb25SZXN1bHRbMF09PT1cIjFcIil7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHRvYXN0ID0gVG9hc3QubWFrZVRleHQoXCLnmbvlhaXmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgdG9hc3Quc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tZW51XCJdKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5sb2dpblJlc3BvbnNlLmF1dGhSZXN1bHQgPSB0aGlzLnhtbFRvSnNvblJlc3VsdFswXTtcbiAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwubG9naW5SZXNwb25zZS5hY2NvdW50TmFtZSA9IHRoaXMueG1sVG9Kc29uUmVzdWx0WzFdO1xuICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5sb2dpblJlc3BvbnNlLmZhbWlseU1lbWJlciA9IHRoaXMueG1sVG9Kc29uUmVzdWx0WzJdO1xuICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vID0gdGhpcy54bWxUb0pzb25SZXN1bHRbM107XG4gICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmxvZ2luUmVzcG9uc2UubWVtYmVyX2lkID0gdGhpcy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwubG9naW5SZXNwb25zZS5tZW1iZXJfcGFzc3dkID0gdGhpcy5wYXNzd29yZDtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENoZWNrYm94KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnhtbFRvSnNvblJlc3VsdFswXT09PVwiMFwiKXtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9hc3QgPSBUb2FzdC5tYWtlVGV4dChcIueZu+WFpeWkseaVl1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmxvZ2luUmVzcG9uc2UuYXV0aFJlc3VsdCA9IHRoaXMueG1sVG9Kc29uUmVzdWx0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2dpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gIH1cblxuXG4gIHNldENoZWNrYm94ID0gICgpPT4ge1xuICAgIFxuICAgICAgICBpZih0aGlzLnNpZ25hdHVyZUNoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCl7XG4gICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJpZFwiLCB0aGlzLmlkKTtcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInBhc3N3b3JkXCIsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0Qm9vbGVhbihcImNoZWNrZWRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJpZFwiKT09PXVuZGVmaW5lZCB8fCBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwYXNzd29yZFwiKT09PXVuZGVmaW5lZCYmYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImNoZWNrZWRcIikhPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKFwiaWRcIik7XG4gICAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKFwicGFzc3dvcmRcIik7XG4gICAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICB9O1xuICBcblxuICBvbkV2ZW50Q2FsbGJhY2sgPSAgKGV2ZW50KT0+IHtcblxuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmV2ZW50VHlwZSkge1xuXG5cbiAgICAgICAgICBjYXNlIHhtbE1vZHVsZS5QYXJzZXJFdmVudFR5cGUuVGV4dDpcbiAgICAgICAgICAgICAgbGV0IHNpZ25pZmljYW50VGV4dCA9IGV2ZW50LmRhdGEudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHNpZ25pZmljYW50VGV4dCAhPT0gXCJcIiAmJiBzaWduaWZpY2FudFRleHQgIT09dW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnhtbFRvSnNvblJlc3VsdC5wdXNoKHNpZ25pZmljYW50VGV4dCk7XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgfVxuICB9O1xuXG4gIG9uRXJyb3JDYWxsYmFjayA9IChlcnJvcjogRXJyb3IpPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfTtcblxuXG59XG4iXX0=