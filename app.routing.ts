import { EntryComponent } from "./pages/entry/entry.component";
import { ListComponent } from "./pages/list/list.component";
import { LoginComponent } from "./pages/login/login.component";
import { JoinComponent } from "./pages/join/join.component";

export const routes = [
  { path: "", component: EntryComponent },
  { path: "list", component: ListComponent },
  { path: "login", component: LoginComponent },
  { path: "entry", component: EntryComponent },
  { path: "join", component: JoinComponent },
];

export const navigatableComponents = [
  EntryComponent,
  ListComponent,
  LoginComponent,
  JoinComponent
];
