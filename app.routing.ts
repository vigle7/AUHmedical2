import { AppComponent } from "./app.component";
import { EntryComponent } from "./pages/entry/entry.component";
import { ModalViewComponent } from "./pages/entry/pageModal";
import { LoginComponent } from "./pages/login/login.component";
import { ConsentComponent } from "./pages/consent/consent.component";
import { SignUpComponent } from "./pages/signUp/signUp.component";
import { DatePickerComponent } from "./pages/datePicker/datePicker.component";
import { ForgetPwComponent } from "./pages/forgetPw/forgetPw.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { WebViewComponent } from "./pages/webView/webView.component";
import { PhilosophyComponent } from "./pages/philosophy/philosophy.component";
import { MedicalAdviceComponent } from "./pages/medicalAdvice/medicalAdvice.component";

export const routes = [
  { path: "", component: EntryComponent },
  { path: "entry", component: EntryComponent },
  { path: "pageModal", component: ModalViewComponent },
  { path: "login", component: LoginComponent },
  { path: "app", component: AppComponent },
  { path: "consent", component: ConsentComponent },
  { path: "signUp", component: SignUpComponent },
  { path: "datePicker", component: DatePickerComponent },
  { path: "forgetPw", component: ForgetPwComponent },
  { path: "menu", component: MenuComponent },
  { path: "webView/:url", component: WebViewComponent },
  { path: "philosophy", component: PhilosophyComponent },
  { path: "medicalAdvice", component: MedicalAdviceComponent },
];

export const navigatableComponents = [
  EntryComponent,
  ModalViewComponent,
  LoginComponent,
  ConsentComponent,
  SignUpComponent,
  DatePickerComponent,
  ForgetPwComponent,
  MenuComponent,
  WebViewComponent,
  PhilosophyComponent,
  MedicalAdviceComponent,
];
