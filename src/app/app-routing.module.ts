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
    path:"DutyList",
    component:ListDutyComponent
  },{
    path:"AddDuty",
    component:AddDutyComponent
  },
  {
    path:"HolidayList",
    component:ListHolidayComponent
  },{
    path:"Calendar",
    component:CalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
