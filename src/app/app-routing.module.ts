import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./UserAccount/login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {NotFoundComponent} from "./Shared/not-found/not-found.component";
import {ResetPasswordComponent} from "./UserAccount/reset-password/reset-password.component";
 import {SettingsAnalaysisComponent} from "./Biologiste/settings-analaysis/settings-analaysis.component";
import {RetrieveUsersComponent} from "./UserAccount/retrieve-users/retrieve-users.component";
import {ForgetPasswordComponent} from "./UserAccount/forget-password/forget-password.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path:"login",
    component:LoginComponent
  }
  ,
  {
    path: '',
    pathMatch:"full",
    redirectTo: 'login'
  },
  {
    path:"chat",
    component:ChatComponent
  },
  {
    path:"error",
    component:NotFoundComponent
  },
  {
    path:"resetpassword",
    component:ResetPasswordComponent
  },
  {
    path:"forgetpassword",
    component:ForgetPasswordComponent
  },
  {
    path:"SettingsAnalaysis",
    component:SettingsAnalaysisComponent
  },{
    path:"users",
    component:RetrieveUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
