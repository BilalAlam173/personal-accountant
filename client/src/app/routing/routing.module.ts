import { MethodComponent } from "./../method/method.component";
import { AccountComponent } from "./../account/account.component";
import { CategoryComponent } from "./../category/category.component";
import { EntryComponent } from "./../entry/entry.component";
import { AuthGuard } from "./../shared/guard/auth.guard";
import { DashboardComponent } from "./../dashboard/dashboard.component";
import { SignupComponent } from "./../signup/signup.component";
import { LoginComponent } from "./../login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./../home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "entry",
        component: EntryComponent
      },
      {
        path: "category",
        component: CategoryComponent
      },
      {
        path: "account",
        component: AccountComponent
      },
      {
        path: "method",
        component: MethodComponent
      }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", redirectTo: "login" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
