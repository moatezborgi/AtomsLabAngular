import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./UserAccount/login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {NotFoundComponent} from "./Shared/not-found/not-found.component";
import {ResetPasswordComponent} from "./UserAccount/reset-password/reset-password.component";
 import {SettingsAnalaysisComponent} from "./Biologiste/settings-analaysis/settings-analaysis.component";
import {AddRequestAnalysisComponent} from "./Medecin/add-request-analysis/add-request-analysis.component";

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
  },{
    path:"analysissettings",
    component:SettingsAnalaysisComponent
  },
  {
    path:"addrequestanalysis",
    component:AddRequestAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
