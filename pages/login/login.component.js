"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var appSettings = require("application-settings");
var Toast = require("nativescript-toast");
var fetchModule = require("fetch");
var xmlModule = require("xml");
var LoginComponent = (function () {
    function LoginComponent(router, page) {
        var _this = this;
        this.router = router;
        this.page = page;
        this.xmlToJsonResult = [];
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
        if (appSettings.getString("id") !== undefined && appSettings.getString("password") !== undefined && appSettings.getBoolean("checked") !== undefined) {
            this.id = appSettings.getString("id");
            this.password = appSettings.getString("password");
            this.signatureCheckBox.nativeElement.checked = appSettings.getBoolean("checked");
        }
        this.showLogin = true;
        //this.page.actionBar.title = "申請會員";
        //this.page.actionBarHidden = true;
        //this.page.backgroundImage = this.page.ios ? "res://homebg_ldpi_asia.png" : "res://homebg_ldpi_asia.png";
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
            'tokenid': 'APA91bHd_8dywVKLPMsCk4jgv0MRisi-4paYhIx4Y0EaudERFNG7w_QWnzPih7LPncaGzoNbVHUXxRz0FrqNJEbtT2tvvHhGB1vwSgxPyWfBwvj7T3GaK5VlyzyCyRgXf6tYcibN7F_M'
        };
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        var bodyString = formBody.join("&");
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
        }).then(function (response) {
            //console.log(response._bodyText);
            //this.result = [];
            _this.showLogin = true;
            var xmlParser = new xmlModule.XmlParser(_this.onEventCallback, _this.onErrorCallback, true);
            xmlParser.parse(response._bodyText);
            console.log("result:" + _this.xmlToJsonResult);
            if (_this.xmlToJsonResult[0] === "1") {
                var toast = Toast.makeText("登入成功");
                toast.show();
                _this.router.navigate(["/menu"]);
                global.loginResponse.authResult = _this.xmlToJsonResult[0];
                global.loginResponse.accountName = _this.xmlToJsonResult[1];
                global.loginResponse.familyMember = _this.xmlToJsonResult[2];
                global.loginResponse.accoutMemberNo = _this.xmlToJsonResult[3];
            }
            if (_this.xmlToJsonResult[0] === "0") {
                var toast = Toast.makeText("登入失敗");
                toast.show();
                global.loginResponse.authResult = _this.xmlToJsonResult[0];
                return;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUQsZUFBZSxDQUFDLENBQUE7QUFDekUsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMscUJBQXFCLFNBQVMsQ0FBQyxDQUFBO0FBRy9CLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRXBELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzVDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQyxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFRakM7SUFRRSx3QkFBb0IsTUFBYyxFQUFXLElBQVU7UUFSekQsaUJBMkpDO1FBbkpxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVcsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUgzQyxvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQThIN0Msb0JBQWUsR0FBSSxVQUFDLEtBQUs7WUFHckIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBR3RCLEtBQUssU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJO29CQUMvQixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMxQyxFQUFFLENBQUMsQ0FBQyxlQUFlLEtBQUssRUFBRSxJQUFJLGVBQWUsS0FBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFJL0MsQ0FBQztvQkFDRCxLQUFLLENBQUM7WUFFZCxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsb0JBQWUsR0FBRyxVQUFDLEtBQVk7WUFDM0IsT0FBTyxD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LENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pELFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTVDLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFFSixFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFHLFNBQVMsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFHLFNBQVMsSUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFHLFNBQVMsQ0FBQyxDQUFBLENBQUM7b0JBQzFJLE1BQU0sQ0FBQTtnQkFDUixDQUFDO2dCQUVELFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9CLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFaEMsQ0FBQztRQUVKLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBR2IsQ0FBQztJQTlIRjtRQUFDLGdCQUFTLENBQUMsSUFBSSxDQUFDOzs2REFBQTtJQVJqQjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUVqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3JFLENBQUM7O3NCQUFBO0lBNEpGLHFCQUFDO0FBQUQsQ0FBQyxBQTNKRCxJQTJKQztBQTNKWSxzQkFBYyxpQkEySjFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuY29uc3QgVG9hc3QgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRvYXN0XCIpO1xuY29uc3QgZmV0Y2hNb2R1bGUgPSByZXF1aXJlKFwiZmV0Y2hcIik7XG5jb25zdCB4bWxNb2R1bGUgPSByZXF1aXJlKFwieG1sXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibG9naW5cIixcblxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoXCJDQlwiKSBzaWduYXR1cmVDaGVja0JveDogRWxlbWVudFJlZjtcbiAgICAgIHByaXZhdGUgaWQ6c3RyaW5nO1xuICAgICAgcHJpdmF0ZSBwYXNzd29yZDpzdHJpbmc7XG4gICAgICBwcml2YXRlIHhtbFRvSnNvblJlc3VsdDpBcnJheTxzdHJpbmc+PVtdO1xuICAgICAgcHJpdmF0ZSBzaG93TG9naW46Ym9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImlkXCIpIT09dW5kZWZpbmVkICYmIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBhc3N3b3JkXCIpIT09dW5kZWZpbmVkJiZhcHBTZXR0aW5ncy5nZXRCb29sZWFuKFwiY2hlY2tlZFwiKSE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgdGhpcy5pZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImlkXCIpO1xuICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwYXNzd29yZFwiKTtcbiAgICAgICAgICB0aGlzLnNpZ25hdHVyZUNoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IGFwcFNldHRpbmdzLmdldEJvb2xlYW4oXCJjaGVja2VkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93TG9naW4gPSB0cnVlO1xuXG4gICAgLy90aGlzLnBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gXCLnlLPoq4vmnIPlk6FcIjtcbiAgICAvL3RoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIC8vdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IHRoaXMucGFnZS5pb3MgPyBcInJlczovL2hvbWViZ19sZHBpX2FzaWEucG5nXCIgOiBcInJlczovL2hvbWViZ19sZHBpX2FzaWEucG5nXCI7XG4gIH1cblxuXG5cbiAgbG9naW4oKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2dpbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy54bWxUb0pzb25SZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgICAgIGxldCBkZXRhaWxzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWVtYmVyX2lkJzogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lbWJlcl9wYXNzd2QnOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zcG5vJzogMjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b2tlbnR5cGUnOiAnRDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnV1NQYXNzd29yZCc6ICdhcHBtb2JpbGVfY211aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdXU3VzZXJpZCc6ICdjbXVoX2FwcG1vYmlsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b2tlbmlkJzonQVBBOTFiSGRfOGR5d1ZLTFBNc0NrNGpndjBNUmlzaS00cGFZaEl4NFkwRWF1ZEVSRk5HN3dfUVduelBpaDdMUG5jYUd6b05iVkhVWHhSejBGcnFOSkVidFQydHZ2SGhHQjF2d1NneFB5V2ZCd3ZqN1QzR2FLNVZseXp5Q3lSZ1hmNnRZY2liTjdGX00nXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybUJvZHkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBkZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5jb2RlZEtleSA9IGVuY29kZVVSSUNvbXBvbmVudChwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KGRldGFpbHNbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Cb2R5LnB1c2goZW5jb2RlZEtleSArIFwiPVwiICsgZW5jb2RlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9keVN0cmluZyA9IGZvcm1Cb2R5LmpvaW4oXCImXCIpO1xuXG4gICAgICAgICAgLy8gdmFyIGRhdGEgPSBlbmNvZGVVUkkoXCJtZW1iZXJfaWQ9dGhpcy5pZCZtZW1iZXJfcGFzc3dkPXRoaXMucGFzc3dvcmQmaG9zcG5vPTIyJnRva2VudHlwZT1EMiZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJldTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJnRva2VuaWQ9QVBBOTFiSGRfOGR5d1ZLTFBNc0NrNGpndjBNUmlzaS00cGFZaEl4NFkwRWF1ZEVSRk5HN3dfUVduelBpaDdMUG5jYUd6b05iVkhVWHhSejBGcnFOSkVidFQydHZ2SGhHQjF2d1NneFB5V2ZCd3ZqN1QzR2FLNVZseXp5Q3lSZ1hmNnRZY2liTjdGX01cIik7XG5cblxuICAgICAgICAvL2ZldGNoKFwiaHR0cDovLzEyMi4xNDYuMTY4LjExL0FwcFdlYlNlcnZpY2UvQXBwU2VydmljZS5hc214L0Noa0FwcE1lbWJlclBhc3NXb3JkXCJcbiAgICAgICAgLy/lm57lgrNcbiAgICAgICAgLy8gICAgMDrlpLHmlZfvvIzlr4bnorzpjK/oqqTmiJbpnZ7mnIPlk6HmiJbngrrlgZznlKhcbiAgICAgICAgLy8gICAgMTrmiJDlip/vvIzkuJTlr4bnorzkuI3pnIDmm7TmlLlcbiAgICAgICAgLy8gICAgMjrmiJDlip/vvIzkuJTlr4bnorzpnIDph43mlrDkv67mlLko56ys5LiA5qyh5L2/55So5oiW5YWt5YCL5pyI6ZyA6YeN6Kit5a+G56K8KSAgICAgICAgICAgICAgICBcbiAgICAgICAgLy/nrKzkuozlgIvlm57lgrMg6Zmz5YWI55SfIOioseWwj+WnkFxuICAgICAgICAvLzEwMzEyMTflhYjkv53nlZllbWFpbCDlhYjlgrPmmK/lkKbngrrnpL7ljYDphqvlrbjpg6jnmoTphqvnmYLnvqTnl4XmgqMs5aaC5p6c5piv5YmH5Zue5YKzMSzlhbbppJjnmoboppbngrrpnZ5cbiAgICAgICAgLy/nrKzkuInlgIvlm57lgrMg5Lqe5aSn5biz6JmfIGVtYWlsXG4gICAgICAgIC8v56ys5Zub5YCL5Zue5YKzIOeXheatt+iZn1xuICAgICAgICAgICAgZmV0Y2hNb2R1bGUuZmV0Y2goXCJodHRwOi8vMTIyLjE0Ni4xNjguMTEvQXBwV2ViU2VydmljZS9BcHBTZXJ2aWNlLmFzbXgvQ2hrQXBwTWVtYmVyUGFzc1dvcmRcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICAgICAgICAgICAgYm9keTogYm9keVN0cmluZ1xuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpPT4ge1xuXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5fYm9keVRleHQpO1xuXG4gICAgICAgICAgICAgICAgLy90aGlzLnJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvZ2luID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGxldCB4bWxQYXJzZXIgPSBuZXcgeG1sTW9kdWxlLlhtbFBhcnNlcih0aGlzLm9uRXZlbnRDYWxsYmFjaywgdGhpcy5vbkVycm9yQ2FsbGJhY2ssdHJ1ZSk7XG4gICAgICAgICAgICAgICAgeG1sUGFyc2VyLnBhcnNlKHJlc3BvbnNlLl9ib2R5VGV4dCk7XG5cblxuXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdDpcIit0aGlzLnhtbFRvSnNvblJlc3VsdCk7XG4gICAgXG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnhtbFRvSnNvblJlc3VsdFswXT09PVwiMVwiKXtcbiAgICAgICAgICAgICAgICAgIGxldCB0b2FzdCA9IFRvYXN0Lm1ha2VUZXh0KFwi55m75YWl5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgICAgdG9hc3Quc2hvdygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21lbnVcIl0pO1xuXG4gICAgICAgICAgICAgICAgICBnbG9iYWwubG9naW5SZXNwb25zZS5hdXRoUmVzdWx0ID0gdGhpcy54bWxUb0pzb25SZXN1bHRbMF07XG4gICAgICAgICAgICAgICAgICBnbG9iYWwubG9naW5SZXNwb25zZS5hY2NvdW50TmFtZSA9IHRoaXMueG1sVG9Kc29uUmVzdWx0WzFdO1xuICAgICAgICAgICAgICAgICAgZ2xvYmFsLmxvZ2luUmVzcG9uc2UuZmFtaWx5TWVtYmVyID0gdGhpcy54bWxUb0pzb25SZXN1bHRbMl07XG4gICAgICAgICAgICAgICAgICBnbG9iYWwubG9naW5SZXNwb25zZS5hY2NvdXRNZW1iZXJObyA9IHRoaXMueG1sVG9Kc29uUmVzdWx0WzNdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMueG1sVG9Kc29uUmVzdWx0WzBdPT09XCIwXCIpe1xuICAgICAgICAgICAgICAgICAgbGV0IHRvYXN0ID0gVG9hc3QubWFrZVRleHQoXCLnmbvlhaXlpLHmlZdcIik7XG4gICAgICAgICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICBnbG9iYWwubG9naW5SZXNwb25zZS5hdXRoUmVzdWx0ID0gdGhpcy54bWxUb0pzb25SZXN1bHRbMF07XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2lnbmF0dXJlQ2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiaWRcIiwgdGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInBhc3N3b3JkXCIsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRCb29sZWFuKFwiY2hlY2tlZFwiLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJpZFwiKT09PXVuZGVmaW5lZCB8fCBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwYXNzd29yZFwiKT09PXVuZGVmaW5lZCYmYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImNoZWNrZWRcIikhPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5yZW1vdmUoXCJwYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnJlbW92ZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICB9LCAoZXJyb3IpID0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvZ2luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuXG4gIH1cbiAgXG5cbiAgb25FdmVudENhbGxiYWNrID0gIChldmVudCk9PiB7XG5cblxuICAgICAgc3dpdGNoIChldmVudC5ldmVudFR5cGUpIHtcblxuXG4gICAgICAgICAgY2FzZSB4bWxNb2R1bGUuUGFyc2VyRXZlbnRUeXBlLlRleHQ6XG4gICAgICAgICAgICAgIGxldCBzaWduaWZpY2FudFRleHQgPSBldmVudC5kYXRhLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChzaWduaWZpY2FudFRleHQgIT09IFwiXCIgJiYgc2lnbmlmaWNhbnRUZXh0ICE9PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy54bWxUb0pzb25SZXN1bHQucHVzaChzaWduaWZpY2FudFRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGF0LnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInR5cGUgb2YgOlwiICt0eXBlb2Ygc2lnbmlmaWNhbnRUZXh0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICB9XG4gIH07XG5cbiAgb25FcnJvckNhbGxiYWNrID0gKGVycm9yOiBFcnJvcik9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICB9O1xuXG5cbn1cbiJdfQ==