import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { datePickerReducer } from './reducer/datePickerReducer';


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    ReactiveFormsModule,
    StoreModule.provideStore({ dateData: datePickerReducer })
  ],

  declarations: [
  AppComponent,
    ...navigatableComponents,
  ],
  entryComponents: [
  ...navigatableComponents
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
