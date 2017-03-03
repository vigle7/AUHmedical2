import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { View } from "ui/core/view";
import * as dialogs from "ui/dialogs";

import {registerElement} from "nativescript-angular/element-registry";


registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);

@Component({
  selector: "consent",
  templateUrl: "pages/consent/consent.html",
  styleUrls: ["pages/consent/consent-common.css"],
})
export class ConsentComponent implements OnInit {



	@ViewChild("CB") signatureCheckBox: ElementRef;

	public toggleCheck() {
	    this.signatureCheckBox.nativeElement.toggle();
	}

  constructor(private router: Router, private page: Page) {

  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

    displayActionDialog() {

		let options = { 
		    message: "請點選本人已詳閱之說明內容。",
		    okButtonText: "確定"
		};

		dialogs.alert(options);

    }

  agree(){

	    if(!this.signatureCheckBox.nativeElement.checked){
	    	this.displayActionDialog();
	    	return
	    }

	    this.router.navigate(["/signUp"]);
	}

}
