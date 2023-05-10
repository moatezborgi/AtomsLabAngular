import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./UserAccount/login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {NotFoundComponent} from "./Shared/not-found/not-found.component";
import {ResetPasswordComponent} from "./UserAccount/reset-password/reset-password.component";
 import {SettingsAnalaysisComponent} from "./Biologiste/settings-analaysis/settings-analaysis.component";
import {ListReactifComponent} from "./InventaireManager/Reactif/list-reactif/list-reactif.component";
import {AddReactifComponent} from "./InventaireManager/Reactif/add-reactif/add-reactif.component";
import {DeleteReactifComponent} from "./InventaireManager/Reactif/delete-reactif/delete-reactif.component";
import {UpdateReactifComponent} from "./InventaireManager/Reactif/update-reactif/update-reactif.component";

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
    path:"SettingsAnalaysis",
    component:SettingsAnalaysisComponent
  }
  // --------------------- InventoryManager
  ,{
  path:"ReactifList",
  component:ListReactifComponent
  },
  {
    path:"addReactif",
    component:AddReactifComponent
  },
  {
    path:"deleteReactif/:id",
    component:DeleteReactifComponent
  },
  {
    path:"updateReactif/:id",
    component:UpdateReactifComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
