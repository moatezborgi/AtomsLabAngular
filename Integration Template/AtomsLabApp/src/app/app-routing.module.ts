import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./UserAccount/login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {NotFoundComponent} from "./Shared/not-found/not-found.component";
import {ResetPasswordComponent} from "./UserAccount/reset-password/reset-password.component";
 import {SettingsAnalaysisComponent} from "./Biologiste/settings-analaysis/settings-analaysis.component";
import {AddRequestAnalysisComponent} from "./Medecin/add-request-analysis/add-request-analysis.component";
import {AddcourseComponent} from "./TrainingComponents/Course/addcourse/addcourse.component";
import {AddtrainingComponent} from "./TrainingComponents/Training/addtraining/addtraining.component";
import {Listcomponents1Component} from "./TrainingComponents/Course/listcomponents1/listcomponents1.component";
import {Editcourse1Component} from "./TrainingComponents/Course/editcourse1/editcourse1.component";
import {DeletecourseComponent} from "./TrainingComponents/Course/deletecourse/deletecourse.component";

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
  },
  {
    path:"addcourse",
    component:AddcourseComponent
  },
  {
    path:"addTraining",
    component:AddtrainingComponent
  },
  {
    path: "allcourses",
    component: Listcomponents1Component
  },
  {
    path:"updatecourse/:id",
    component:Editcourse1Component
  },

  {
    path:"deletecourse",
    component:DeletecourseComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
