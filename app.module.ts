// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { NativeScriptModule } from "nativescript-angular/platform";



import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StoreModule } from '@ngrx/store';
import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { datePickerReducer } from './reducer/datePickerReducer';
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui-pro/sidedrawer/angular";

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
  SIDEDRAWER_DIRECTIVES,
  AppComponent,
    ...navigatableComponents,
  ],
  entryComponents: [
  ...navigatableComponents
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
