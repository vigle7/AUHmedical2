"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var Toast = require("nativescript-toast");
var MenuComponent = (function () {
    function MenuComponent(router, page) {
        this.router = router;
        this.page = page;
        this.showButtonArray = [false, false, false, false, false, false, false, false, false, false, false, false, false];
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.showWebView = false;
    };
    MenuComponent.prototype.submit = function (arg) {
        this.hospaliasno = 22;
        switch (arg) {
            case "依科別掛號":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/category.php?locale=zh-Hant"]);
                break;
            case "依醫師掛號":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/doctor_search.php?locale=zh-Hant"]);
                break;
            case "依歷史記錄掛號":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/insert_user_id3.php?locale=zh-Hant"]);
                break;
            case "掛號查詢或取消":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/insert_user_id2.php?title=預約掛號查詢&nextLink=query_register.php"]);
                break;
            case "其它進度查詢":
                this.router.navigate(["/webView", "http://61.66.117.88/WPAppWebQuery/WForscheduleqry.aspx"]);
                break;
            case "依診間查看診進度":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/insert_user_id4.php?title=看診進度&nextLink=progress4.php&locale=zh-Hant"]);
                break;
            case "依病人查看診進度":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/insert_user_id2.php?title=查詢診號&nextLink=progress.php"]);
                break;
            case "健康新知":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=2&hospaliasno=" + this.hospaliasno)]);
                break;
            case "醫院新訊":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=3&hospaliasno=" + this.hospaliasno)]);
                break;
            case "醫師介紹":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=4&hospaliasno=" + this.hospaliasno)]);
                break;
            case "西藥服務":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFDrugMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=1&hospaliasno=" + this.hospaliasno)]);
                break;
            case "中藥服務":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFDrugMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=2&hospaliasno=" + this.hospaliasno)]);
                break;
            case "中亞健康網":
                this.router.navigate(["/webView", ("http://www.ca2-health.com/?FM=1&hospaliasno=" + this.hospaliasno)]);
                break;
            case "衛教單張":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFInstructionsQry.aspx?hospaliasno=" + this.hospaliasno)]);
                break;
            case "影音衛教搜尋":
                this.router.navigate(["/webView", "http://61.66.117.66/MultiMediaHealthEducation/VideoDataBaseApp.aspx"]);
                break;
            case "各科介紹":
                this.router.navigate(["/webView", "http://61.66.117.197:2181/cmuh_apptest/reference.php"]);
                break;
            case "免費保健":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=1&hospaliasno=" + this.hospaliasno)]);
                break;
            case "保健講座":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=5&hospaliasno=" + this.hospaliasno)]);
                break;
            case "我的用藥":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFDrugQryMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "就診前記錄":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFPreRecordMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "我的檢驗":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFLabQryMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "家人用藥":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFDrugRecord.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno + "2&role=1")]);
                break;
            case "家人衛教":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFInstructionMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&role=1&hospaliasno=" + this.hospaliasno)]);
                break;
            case "就醫行事曆":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFScheduleMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "我的衛教":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFInstructionMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "加入會員":
                if (global.loginResponse.authResult != '0') {
                    this.toast = Toast.makeText("請先登出會員");
                    this.toast.show();
                    return;
                }
                this.router.navigate(["/consent"]);
                break;
            case "血壓":
                this.router.navigate(["/webView", ("http://61.66.117.88/HealthManage/Home/Index/" + global.loginResponse.accoutMemberNo + "/1")]);
                break;
            case "血糖":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFInstructionMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            case "BMI":
                this.router.navigate(["/webView", ("http://61.66.117.88/WPAppWebQuery/WFInstructionMain.aspx?memberno=" + global.loginResponse.accoutMemberNo + "&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=" + this.hospaliasno)]);
                break;
            default:
        }
        //this.params.closeCallback();
    };
    MenuComponent.prototype.showButton = function (idx) {
        if (idx === 8) {
            if (global.loginResponse.authResult !== '1') {
                this.toast = Toast.makeText("請先登入會員");
                this.toast.show();
                return;
            }
        }
        for (var i = 0; i < this.showButtonArray.length; i++) {
            if (i === idx) {
                this.showButtonArray[i] = !this.showButtonArray[i];
            }
            else {
                this.showButtonArray[i] = false;
            }
        }
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: "menu",
            templateUrl: "pages/menu/menu.html",
            styleUrls: ["pages/menu/menu-common.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQW1DLGVBQWUsQ0FBQyxDQUFBO0FBQ25ELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQUcvQixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQVM1QztJQU9FLHVCQUFvQixNQUFjLEVBQVcsSUFBVTtRQUFuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVcsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUwvQyxvQkFBZSxHQUFnQixDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBRSxDQUFDO0lBT3hILENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBRU0sSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxHQUFHO1FBRU4sSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdEIsTUFBTSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVULEtBQUssT0FBTztnQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxvRUFBb0UsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BHLEtBQUssQ0FBQztZQUNWLEtBQUssT0FBTztnQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyx5RUFBeUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pHLEtBQUssQ0FBQztZQUNWLEtBQUssU0FBUztnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNHLEtBQUssQ0FBQztZQUVWLEtBQUssU0FBUztnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxxR0FBcUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JJLEtBQUssQ0FBQztZQUVWLEtBQUssUUFBUTtnQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyx3REFBd0QsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hGLEtBQUssQ0FBQztZQUNWLEtBQUssVUFBVTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyw2R0FBNkcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdJLEtBQUssQ0FBQztZQUNWLEtBQUssVUFBVTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyw2RkFBNkYsQ0FBQyxDQUFDLENBQUM7Z0JBQzdILEtBQUssQ0FBQztZQUVWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyw0SEFBeUgsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0ssS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLDRIQUF5SCxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzSyxLQUFLLENBQUM7WUFDVixLQUFLLE1BQU07Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsNEhBQXlILElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNLLEtBQUssQ0FBQztZQUVWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyw0SEFBeUgsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0ssS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLDRIQUF5SCxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzSyxLQUFLLENBQUM7WUFFVixLQUFLLE9BQU87Z0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsa0RBQStDLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pHLEtBQUssQ0FBQztZQUNWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQywyRUFBd0UsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUgsS0FBSyxDQUFDO1lBQ1YsS0FBSyxRQUFRO2dCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHFFQUFxRSxDQUFDLENBQUMsQ0FBQztnQkFDckcsS0FBSyxDQUFDO1lBRVYsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHNEQUFzRCxDQUFDLENBQUMsQ0FBQztnQkFDdEYsS0FBSyxDQUFDO1lBRVYsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLDRIQUF5SCxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzSyxLQUFLLENBQUM7WUFDVixLQUFLLE1BQU07Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsNEhBQXlILElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNLLEtBQUssQ0FBQztZQUVWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxvRUFBaUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLHVFQUFrRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4TixLQUFLLENBQUM7WUFDVixLQUFLLE9BQU87Z0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsc0VBQW1FLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyx1RUFBa0UsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDMU4sS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLG1FQUFnRSxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsdUVBQWtFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZOLEtBQUssQ0FBQztZQUVWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxtRUFBZ0UsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLHVFQUFrRSxJQUFJLENBQUMsV0FBVyxjQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMvTixLQUFLLENBQUM7WUFDVixLQUFLLE1BQU07Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsd0VBQXFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyw4RUFBeUUsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDbk8sS0FBSyxDQUFDO1lBRVYsS0FBSyxPQUFPO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLHFFQUFrRSxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsdUVBQWtFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pOLEtBQUssQ0FBQztZQUNWLEtBQUssTUFBTTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyx3RUFBcUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLHVFQUFrRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1TixLQUFLLENBQUM7WUFFVixLQUFLLE1BQU07Z0JBQ1AsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUUsR0FBRyxDQUFDLENBQUEsQ0FBQztvQkFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNsQixNQUFNLENBQUE7Z0JBQUEsQ0FBQztnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLEtBQUssQ0FBQztZQUVWLEtBQUssSUFBSTtnQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxrREFBK0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLFFBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RILEtBQUssQ0FBQztZQUNWLEtBQUssSUFBSTtnQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyx3RUFBcUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLHVFQUFrRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1TixLQUFLLENBQUM7WUFDVixLQUFLLEtBQUs7Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsd0VBQXFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyx1RUFBa0UsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDNU4sS0FBSyxDQUFDO1lBR1YsUUFBUTtRQUVaLENBQUM7UUFDRCw4QkFBOEI7SUFDbEMsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxHQUFHO1FBRVYsRUFBRSxDQUFBLENBQUMsR0FBRyxLQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDUixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsS0FBRyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRWxCLE1BQU0sQ0FBQTtZQUFBLENBQUM7UUFDZixDQUFDO1FBRUQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzNDLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBRyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUNSLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUE1Skg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFFaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOztxQkFBQTtJQXlKRixvQkFBQztBQUFELENBQUMsQUF4SkQsSUF3SkM7QUF4SlkscUJBQWEsZ0JBd0p6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCAgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHRhYlZpZXdNb2R1bGUgPSByZXF1aXJlKFwidWkvdGFiLXZpZXdcIik7XG5cbmNvbnN0IFRvYXN0ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b2FzdFwiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWVudVwiLFxuXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21lbnUvbWVudS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbWVudS9tZW51LWNvbW1vbi5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2hvd0J1dHRvbkFycmF5OkFycmF5PGJvb2xlYW4+PVtmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZeOAgF07XG5cbiAgcHJpdmF0ZSBzaG93V2ViVmlldzpib29sZWFuO1xuICBwcml2YXRlIGhvc3BhbGlhc25vOm51bWJlcjtcbiAgcHJpdmF0ZSB0b2FzdDphbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5zaG93V2ViVmlldyA9IGZhbHNlO1xuICB9XG5cbiAgc3VibWl0KGFyZyl7XG5cbiAgICAgIHRoaXMuaG9zcGFsaWFzbm8gPSAyMjtcblxuICAgICAgc3dpdGNoKGFyZykge1xuXG4gICAgICAgICAgY2FzZSBcIuS+neenkeWIpeaOm+iZn1wiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9jYXRlZ29yeS5waHA/bG9jYWxlPXpoLUhhbnRcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi5L6d6Yar5bir5o6b6JmfXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L2RvY3Rvcl9zZWFyY2gucGhwP2xvY2FsZT16aC1IYW50XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuS+neatt+WPsuiomOmMhOaOm+iZn1wiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjE5NzoyMTgxL2NtdWhfYXBwdGVzdC9pbnNlcnRfdXNlcl9pZDMucGhwP2xvY2FsZT16aC1IYW50XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwi5o6b6Jmf5p+l6Kmi5oiW5Y+W5raIXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L2luc2VydF91c2VyX2lkMi5waHA/dGl0bGU96aCQ57SE5o6b6Jmf5p+l6KmiJm5leHRMaW5rPXF1ZXJ5X3JlZ2lzdGVyLnBocFwiXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIuWFtuWug+mAsuW6puafpeipolwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZvcnNjaGVkdWxlcXJ5LmFzcHhcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi5L6d6Ki66ZaT5p+l55yL6Ki66YCy5bqmXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L2luc2VydF91c2VyX2lkNC5waHA/dGl0bGU955yL6Ki66YCy5bqmJm5leHRMaW5rPXByb2dyZXNzNC5waHAmbG9jYWxlPXpoLUhhbnRcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi5L6d55eF5Lq65p+l55yL6Ki66YCy5bqmXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L2luc2VydF91c2VyX2lkMi5waHA/dGl0bGU95p+l6Kmi6Ki66JmfJm5leHRMaW5rPXByb2dyZXNzLnBocFwiXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIuWBpeW6t+aWsOefpVwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsYGh0dHA6Ly82MS42Ni4xMTcuODgvV1BBcHBXZWJRdWVyeS9XRk5ld3NNYWluLmFzcHg/V1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZmdW49MiZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi6Yar6Zmi5paw6KiKXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGTmV3c01haW4uYXNweD9XU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmZ1bj0zJmhvc3BhbGlhc25vPSR7dGhpcy5ob3NwYWxpYXNub31gXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLphqvluKvku4vntLlcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZOZXdzTWFpbi5hc3B4P1dTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWgmZnVuPTQmaG9zcGFsaWFzbm89JHt0aGlzLmhvc3BhbGlhc25vfWBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwi6KW/6Jel5pyN5YuZXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGRHJ1Z01haW4uYXNweD9XU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmZ1bj0xJmhvc3BhbGlhc25vPSR7dGhpcy5ob3NwYWxpYXNub31gXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLkuK3ol6XmnI3li5lcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZEcnVnTWFpbi5hc3B4P1dTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWgmZnVuPTImaG9zcGFsaWFzbm89JHt0aGlzLmhvc3BhbGlhc25vfWBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwi5Lit5Lqe5YGl5bq357ayXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovL3d3dy5jYTItaGVhbHRoLmNvbS8/Rk09MSZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi6KGb5pWZ5Zau5by1XCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGSW5zdHJ1Y3Rpb25zUXJ5LmFzcHg/aG9zcGFsaWFzbm89JHt0aGlzLmhvc3BhbGlhc25vfWBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuW9semfs+ihm+aVmeaQnOWwi1wiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsXCJodHRwOi8vNjEuNjYuMTE3LjY2L011bHRpTWVkaWFIZWFsdGhFZHVjYXRpb24vVmlkZW9EYXRhQmFzZUFwcC5hc3B4XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwi5ZCE56eR5LuL57S5XCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixcImh0dHA6Ly82MS42Ni4xMTcuMTk3OjIxODEvY211aF9hcHB0ZXN0L3JlZmVyZW5jZS5waHBcIl0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLlhY3osrvkv53lgaVcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZOZXdzTWFpbi5hc3B4P1dTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWgmZnVuPTEmaG9zcGFsaWFzbm89JHt0aGlzLmhvc3BhbGlhc25vfWBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuS/neWBpeism+W6p1wiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsYGh0dHA6Ly82MS42Ni4xMTcuODgvV1BBcHBXZWJRdWVyeS9XRk5ld3NNYWluLmFzcHg/V1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZmdW49NSZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLmiJHnmoTnlKjol6VcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZEcnVnUXJ5TWFpbi5hc3B4P21lbWJlcm5vPSR7Z2xvYmFsLmxvZ2luUmVzcG9uc2UuYWNjb3V0TWVtYmVyTm99JldTdXNlcmlkPWNtdWhfYXBwbW9iaWxlJldTUGFzc3dvcmQ9YXBwbW9iaWxlX2NtdWgmaG9zcGFsaWFzbm89JHt0aGlzLmhvc3BhbGlhc25vfWBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIuWwseiouuWJjeiomOmMhFwiOlxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJWaWV3XCIsYGh0dHA6Ly82MS42Ni4xMTcuODgvV1BBcHBXZWJRdWVyeS9XRlByZVJlY29yZE1haW4uYXNweD9tZW1iZXJubz0ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfSZXU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmhvc3BhbGlhc25vPSR7dGhpcy5ob3NwYWxpYXNub31gXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLmiJHnmoTmqqLpqZdcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZMYWJRcnlNYWluLmFzcHg/bWVtYmVybm89JHtnbG9iYWwubG9naW5SZXNwb25zZS5hY2NvdXRNZW1iZXJOb30mV1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLlrrbkurrnlKjol6VcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZEcnVnUmVjb3JkLmFzcHg/bWVtYmVybm89JHtnbG9iYWwubG9naW5SZXNwb25zZS5hY2NvdXRNZW1iZXJOb30mV1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99MiZyb2xlPTFgXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLlrrbkurrooZvmlZlcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZJbnN0cnVjdGlvbk1haW4uYXNweD9tZW1iZXJubz0ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfSZXU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJnJvbGU9MSZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCLlsLHphqvooYzkuovmm4ZcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZTY2hlZHVsZU1haW4uYXNweD9tZW1iZXJubz0ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfSZXU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmhvc3BhbGlhc25vPSR7dGhpcy5ob3NwYWxpYXNub31gXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCLmiJHnmoTooZvmlZlcIjpcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2ViVmlld1wiLGBodHRwOi8vNjEuNjYuMTE3Ljg4L1dQQXBwV2ViUXVlcnkvV0ZJbnN0cnVjdGlvbk1haW4uYXNweD9tZW1iZXJubz0ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfSZXU3VzZXJpZD1jbXVoX2FwcG1vYmlsZSZXU1Bhc3N3b3JkPWFwcG1vYmlsZV9jbXVoJmhvc3BhbGlhc25vPSR7dGhpcy5ob3NwYWxpYXNub31gXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIuWKoOWFpeacg+WToVwiOlxuICAgICAgICAgICAgICBpZihnbG9iYWwubG9naW5SZXNwb25zZS5hdXRoUmVzdWx0IT0nMCcpe1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdCA9IFRvYXN0Lm1ha2VUZXh0KFwi6KuL5YWI55m75Ye65pyD5ZOhXCIpO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm59XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jb25zZW50XCJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwi6KGA5aOTXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9IZWFsdGhNYW5hZ2UvSG9tZS9JbmRleC8ke2dsb2JhbC5sb2dpblJlc3BvbnNlLmFjY291dE1lbWJlck5vfS8xYF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwi6KGA57OWXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGSW5zdHJ1Y3Rpb25NYWluLmFzcHg/bWVtYmVybm89JHtnbG9iYWwubG9naW5SZXNwb25zZS5hY2NvdXRNZW1iZXJOb30mV1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQk1JXCI6XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dlYlZpZXdcIixgaHR0cDovLzYxLjY2LjExNy44OC9XUEFwcFdlYlF1ZXJ5L1dGSW5zdHJ1Y3Rpb25NYWluLmFzcHg/bWVtYmVybm89JHtnbG9iYWwubG9naW5SZXNwb25zZS5hY2NvdXRNZW1iZXJOb30mV1N1c2VyaWQ9Y211aF9hcHBtb2JpbGUmV1NQYXNzd29yZD1hcHBtb2JpbGVfY211aCZob3NwYWxpYXNubz0ke3RoaXMuaG9zcGFsaWFzbm99YF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgXG5cbiAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgICAvL3RoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHNob3dCdXR0b24oaWR4KXtcblxuICAgICAgaWYoaWR4PT09OCl7IC8v5pyD5ZOh5bCI5Y2AXG4gICAgICAgICAgaWYoZ2xvYmFsLmxvZ2luUmVzcG9uc2UuYXV0aFJlc3VsdCE9PScxJyl7XG4gICAgICAgICAgICAgIHRoaXMudG9hc3QgPSBUb2FzdC5tYWtlVGV4dChcIuiri+WFiOeZu+WFpeacg+WToVwiKTtcbiAgICAgICAgICAgICAgdGhpcy50b2FzdC5zaG93KCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJufVxuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc2hvd0J1dHRvbkFycmF5Lmxlbmd0aDtpKyspe1xuICAgICAgICAgIGlmKGk9PT1pZHgpe1xuICAgICAgICAgICAgICB0aGlzLnNob3dCdXR0b25BcnJheVtpXT0hdGhpcy5zaG93QnV0dG9uQXJyYXlbaV07XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0J1dHRvbkFycmF5W2ldPWZhbHNlOyAgICBcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cblxufVxuIl19