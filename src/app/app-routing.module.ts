import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./UserAccount/login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {NotFoundComponent} from "./Shared/not-found/not-found.component";
import {ResetPasswordComponent} from "./UserAccount/reset-password/reset-password.component";
import {SettingsAnalaysisComponent} from "./Biologiste/settings-analaysis/settings-analaysis.component";
import {ListDutyComponent} from "./ResourceHumaine/Duty/list-duty/list-duty.component";
import {AddDutyComponent} from "./ResourceHumaine/Duty/add-duty/add-duty.component";
import {ListHolidayComponent} from "./ResourceHumaine/Holiday/list-holiday/list-holiday.component";
import {CalendarComponent} from "./ResourceHumaine/Calendar/calendar/calendar.component";
import {EditDutyComponent} from "./ResourceHumaine/Duty/edit-duty/edit-duty.component";
import {ListRecComponent}from "./ResourceHumaine/Reclamation/list-rec/list-rec.component";
import {AddHolidayComponent} from "./ResourceHumaine/Holiday/add-holiday/add-holiday.component";
import {EditHolidayComponent} from "./ResourceHumaine/Holiday/edit-holiday/edit-holiday.component";
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
  },
  {
    path:"DutyList/:username",
    component:ListDutyComponent
  },{
    path:"AddDuty/:username",
    component:AddDutyComponent
  },{
    path:"UpdateDuty/:id/:username",
    component:EditDutyComponent
  },
  {
    path:"HolidayList/:username",
    component:ListHolidayComponent
  },{
    path:"Calendar/:username",
    component:CalendarComponent
  },{
    path:"Reclamation/:username",
    component:ListRecComponent
  },{
    path:"AddHoliday/:username",
    component:AddHolidayComponent
  },{
    path:"UpdateHoliday/:id/:username",
    component:EditHolidayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
