import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './shared/left-side-bar/left-side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './UserAccount/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WebSocketServiceService} from "./Services/WebSocketServices/web-socket-service.service";
import {Client,Stomp} from "@stomp/stompjs";
import { ChatComponent } from './chat/chat.component';
import {NotFoundComponent} from "./Shared/not-found/not-found.component";
import {ResetPasswordComponent} from "./UserAccount/reset-password/reset-password.component";
import { ToastrModule } from 'ngx-toastr';
 import { SettingsAnalaysisComponent } from './Biologiste/settings-analaysis/settings-analaysis.component';
import {HttpClientModule} from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";
import { EchangedutyComponent } from './ResourceHumaine/Echangeduty/echangeduty.component';
import { ExperienceComponent } from './ResourceHumaine/experience/experience.component';
import { PlanificationdutyComponent } from './ResourceHumaine/planificationduty/planificationduty.component';
import {ListRecComponent}from "./ResourceHumaine/Reclamation/list-rec/list-rec.component";
import { SkillsComponent } from './ResourceHumaine/skills/skills.component';
import { EditDutyComponent } from './ResourceHumaine/Duty/edit-duty/edit-duty.component';
import { DeleteDutyComponent } from './ResourceHumaine/duty/delete-duty/delete-duty.component';
import {ListDutyComponent} from "./ResourceHumaine/Duty/list-duty/list-duty.component";
import {AddDutyComponent} from "./ResourceHumaine/Duty/add-duty/add-duty.component";
import {DatePipe} from "@angular/common";
import { ListHolidayComponent } from './ResourceHumaine/Holiday/list-holiday/list-holiday.component';
import { AddHolidayComponent } from './ResourceHumaine/Holiday/add-holiday/add-holiday.component';
import { DeleteHolidayComponent } from './ResourceHumaine/Holiday/delete-holiday/delete-holiday.component';
import { EditHolidayComponent } from './ResourceHumaine/Holiday/edit-holiday/edit-holiday.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './ResourceHumaine/Calendar/calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ChatComponent,
    NotFoundComponent,
    ResetPasswordComponent,
    SettingsAnalaysisComponent,
    EchangedutyComponent,
    ExperienceComponent,
    PlanificationdutyComponent,
    SkillsComponent,
    EditDutyComponent,
    DeleteDutyComponent,
    ListDutyComponent,
    AddDutyComponent,
    ListHolidayComponent,
    AddHolidayComponent,
    DeleteHolidayComponent,
    EditHolidayComponent,
    CalendarComponent,
    ListRecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    FullCalendarModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [  {
    provide: WebSocketServiceService,
    useFactory: (client: Client) => {
      return new WebSocketServiceService(client);
    },
    deps: [Client]
  },DatePipe,
    {
      provide: Client,
      useValue: Stomp.client('ws://localhost:9999/socket')
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
