import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { JoinComponent } from "./pages/join/join.component";
import { RegisterComponent } from "./pages/register/register.component";

export const routes = [
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "app", component: AppComponent },
  { path: "join", component: JoinComponent },
  { path: "register", component: RegisterComponent },
];

export const navigatableComponents = [
  AppComponent,
  LoginComponent,
  JoinComponent,
  RegisterComponent
];
