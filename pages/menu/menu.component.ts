import { Component, ViewChild, ChangeDetectorRef, Inject, OnInit, AfterViewInit ,ElementRef} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import tabViewModule = require("ui/tab-view");
import { View } from "ui/core/view";
import {Page} from "ui/page";
import observable = require("data/observable");
import {RadSideDrawerComponent, SideDrawerType} from 'nativescript-telerik-ui-pro/sidedrawer/angular';
import {DrawerTransitionBase, SlideInOnTopTransition} from 'nativescript-telerik-ui-pro/sidedrawer';

const Toast = require("nativescript-toast");
const fetchModule = require("fetch");

@Component({
  selector: "menu",

  templateUrl: "pages/menu/menu.html",
  styleUrls: ["pages/menu/menu-common.css"],
})
export class MenuComponent implements OnInit,AfterViewInit {

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  @ViewChild("actionItem") actionItem: ElementRef;
  @ViewChild("signOutBtn") signOutBtn: ElementRef;
  @ViewChild("signInBtn") signInBtn: ElementRef;
  

  private _sideDrawerTransition: DrawerTransitionBase;
  private drawer: SideDrawerType;

  private showButtonArray:Array<boolean>=[false,false,false,false,false,false,false,false,false,false,false,false,false　];

  private showWebView:boolean;
  private hospaliasno:number;
  private toast:any;

  private member:any = new observable.Observable();
  private authResult:string = global.loginResponse.authResult;

//@ViewChild("sideDrawer") sideDrawer: ElementRef;

  constructor(private router: Router,  @Inject(Page) private page: Page,
    private changeDetectionRef: ChangeDetectorRef) {
    page.on("loaded", this.onLoaded, this);
  }

  
  public get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }
  
  public toggle() {
    this.drawer.toggleDrawerState();
  }

  public onLoaded(args) {
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  ngOnInit() {

        this.showWebView = false;
        this.router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    this.drawer.closeDrawer();
                }
        });

        if( global.loginResponse.accountName===''){//未登入會員
            this.member.set("name", '');
            this.signOutBtn.nativeElement.visibility='collapsed';
            this.signInBtn.nativeElement.visibility='visible';
        }else{                                     //已登入會員
            this.member.set("name", global.loginResponse.accountName+'  您好');
            this.signOutBtn.nativeElement.visibility='visible';
            this.signInBtn.nativeElement.visibility='collapsed';
            
        }

        this.member.addEventListener(observable.Observable.propertyChangeEvent,  (pcd: observable.PropertyChangeData)=> {
            if(this.member.name===''){ //登出會員
                this.actionItem.nativeElement.text = '';
                this.signOutBtn.nativeElement.visibility='collapsed';
                this.signInBtn.nativeElement.visibility='visible';
                return
            }else{
                this.member.set("name", global.loginResponse.accountName+'  您好');
                this.signOutBtn.nativeElement.visibility='visible';
                this.signInBtn.nativeElement.visibility='collapsed';
            }
     
        });

  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.changeDetectionRef.detectChanges();
  }

  submit(arg){

      this.hospaliasno = 22;

      switch(arg) {

          case "依科別掛號":
          this.router.navigate(["/webView","http://61.66.117.197:2181/cmuh_apptest/category.php?locale=zh-Hant"]);
              break;
          case "依醫師掛號":
          this.router.navigate(["/webView","http://61.66.117.197:2181/cmuh_apptest/doctor_search.php?locale=zh-Hant"]);
              break;
          case "依歷史記錄掛號":
          this.router.navigate(["/webView","http://61.66.117.197:2181/cmuh_apptest/insert_user_id3.php?locale=zh-Hant"]);
              break;

          case "掛號查詢或取消":
          this.router.navigate(["/webView","http://61.66.117.197:2181/cmuh_apptest/insert_user_id2.php?title=預約掛號查詢&nextLink=query_register.php"]);
              break;

          case "其它進度查詢":
          this.router.navigate(["/webView","http://61.66.117.88/WPAppWebQuery/WForscheduleqry.aspx"]);
              break;
          case "依診間查看診進度":
          this.router.navigate(["/webView","http://61.66.117.197:2181/cmuh_apptest/insert_user_id4.php?title=看診進度&nextLink=progress4.php&locale=zh-Hant"]);
              break;
          case "依病人查看診進度":
          this.router.navigate(["/webView","http://61.66.117.197:2181/cmuh_apptest/insert_user_id2.php?title=查詢診號&nextLink=progress.php"]);
              break;

          case "健康新知":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=2&hospaliasno=${this.hospaliasno}`]);
              break;
          case "醫院新訊":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=3&hospaliasno=${this.hospaliasno}`]);
              break;
          case "醫師介紹":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=4&hospaliasno=${this.hospaliasno}`]);
              break;

          case "西藥服務":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFDrugMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=1&hospaliasno=${this.hospaliasno}`]);
              break;
          case "中藥服務":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFDrugMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=2&hospaliasno=${this.hospaliasno}`]);
              break;

          case "中亞健康網":
          this.router.navigate(["/webView",`http://www.ca2-health.com/?FM=1&hospaliasno=${this.hospaliasno}`]);
              break;
          case "衛教單張":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFInstructionsQry.aspx?hospaliasno=${this.hospaliasno}`]);
              break;
          case "影音衛教搜尋":
          this.router.navigate(["/webView","http://61.66.117.66/MultiMediaHealthEducation/VideoDataBaseApp.aspx"]);
              break;

          case "各科介紹":
          this.router.navigate(["/webView","http://61.66.117.197:2181/cmuh_apptest/reference.php"]);
              break;

          case "免費保健":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=1&hospaliasno=${this.hospaliasno}`]);
              break;
          case "保健講座":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFNewsMain.aspx?WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&fun=5&hospaliasno=${this.hospaliasno}`]);
              break;

          case "我的用藥":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFDrugQryMain.aspx?memberno=${global.loginResponse.accoutMemberNo}&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=${this.hospaliasno}`]);
              break;
          case "就診前記錄":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFPreRecordMain.aspx?memberno=${global.loginResponse.accoutMemberNo}&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=${this.hospaliasno}`]);
              break;
          case "我的檢驗":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFLabQryMain.aspx?memberno=${global.loginResponse.accoutMemberNo}&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=${this.hospaliasno}`]);
              break;

          case "家人用藥":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFDrugRecord.aspx?memberno=${global.loginResponse.accoutMemberNo}&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=${this.hospaliasno}2&role=1`]);
              break;
          case "家人衛教":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFInstructionMain.aspx?memberno=${global.loginResponse.accoutMemberNo}&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&role=1&hospaliasno=${this.hospaliasno}`]);
              break;

          case "就醫行事曆":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFScheduleMain.aspx?memberno=${global.loginResponse.accoutMemberNo}&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=${this.hospaliasno}`]);
              break;
          case "我的衛教":
          this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFInstructionMain.aspx?memberno=${global.loginResponse.accoutMemberNo}&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh&hospaliasno=${this.hospaliasno}`]);
              break;

          case "加入會員":
              if(global.loginResponse.authResult!='0'){
                  this.toast = Toast.makeText("請先登出會員");
                  this.toast.show();
                  return}
              this.router.navigate(["/consent"]);
              break;

          case "血壓":
          this.router.navigate(["/webView",`http://61.66.117.88/HealthManage/Home/Index/${global.loginResponse.accoutMemberNo}/1`]);
              break;
          case "血糖":
          this.router.navigate(["/webView",`http://61.66.117.88/HealthManage/Home/Index/${global.loginResponse.accoutMemberNo}/2`]);
              break;
          case "BMI":
          this.router.navigate(["/webView",`http://61.66.117.88/HealthManage/Home/Index/${global.loginResponse.accoutMemberNo}/3`]);
              break;

          case "登出":
              this.member.set("name", '');
              global.loginResponse.accountName = '';
              global.loginResponse.authResult = '0';
              this.drawer.closeDrawer();
              this.toast = Toast.makeText("登出成功");
              this.toast.show();
              break;
          case "我的訊息":
          alert(global.loginResponse.tokenid);
          if(global.loginResponse.authResult=='0'){
            this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFNotificationMessage.aspx?tokentype=D2&tokenid=${global.loginResponse.tokenid}&hospaliasno=22&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh`]);}
          else{
            this.router.navigate(["/webView",`http://61.66.117.88/WPAppWebQuery/WFNotificationMessage.aspx?tokentype=D2&tokenid=${global.loginResponse.tokenid}&memberno=${global.loginResponse.accoutMemberNo}&hospaliasno=22&WSuserid=cmuh_appmobile&WSPassword=appmobile_cmuh`]);}
              break;
          case "設定":
          console.log(global.loginResponse.tokenid);
          this.router.navigate(["/webView",`<!DOCTYPE html>
                                            <html>
                                                <head>
                                                    <meta charset="utf-8" />
                                                </head>
                                            <body> 
                                            <form name="f" action="http://61.66.117.88/WPAppWebQuery/WFMemberSet.aspx" method="POST"  >
                                                <input type="hidden"  value=${global.loginResponse.member_id}     name= "member_id" >
                                                <input type="hidden"  value=${global.loginResponse.member_passwd}   name= "member_passwd" >
                                                <input type="hidden"  value="22"     name= "hospaliasno" >
                                                <input type="hidden"  value="D2"   name= "tokentype" >
                                                <input type="hidden"  value="appmobile_cmuh"   name= "WSPassword" >
                                                <input type="hidden"  value="cmuh_appmobile"     name= "WSuserid" >
                                                <input type="hidden"  value=${global.loginResponse.tokenid}   name= "tokenid" >
                                            </form>
                                            <script type= "text/javascript">
                                            document.forms["f"].submit();
                                            </script>

                                            </body>
                                            </html>`]);
              break;



              
              

          default:

      }

  }

  showButton(idx){

      if(idx===9||idx===10||idx===11||idx===12){ //會員專區
          if(global.loginResponse.authResult==='0'){
              this.toast = Toast.makeText("請先登入會員");
              this.toast.show();
              return
            }
      }

      for(let i=0;i<this.showButtonArray.length;i++){
          if(i===idx){
              this.showButtonArray[i]=!this.showButtonArray[i];
          }else{
              this.showButtonArray[i]=false;    
          }
      }
  }


  


}
