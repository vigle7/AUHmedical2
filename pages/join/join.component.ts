import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { View } from "ui/core/view";

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { setHintColor } from "../../utils/hint-util";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/entry/entry.html",
  styleUrls: ["pages/entry/entry-common.css", "pages/entry/entry.css"],
})
export class JoinComponent implements OnInit {


  constructor(private router: Router, private userService: UserService, private page: Page) {

  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = this.page.ios ? "res://bluebg.jpg" : "res://bluebg";
  }

  onTap(){
    this.router.navigate(["/login"]);
  }

}
