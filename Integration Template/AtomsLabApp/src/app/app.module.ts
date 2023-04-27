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
import { ListRequestAnalysisComponent } from './Medecin/list-request-analysis/list-request-analysis.component';
import { AddRequestAnalysisComponent } from './Medecin/add-request-analysis/add-request-analysis.component';
import { TraininglistComponent } from './component/traininglist/traininglist.component';
import { CoursecompComponent } from './component/course/coursecomp/coursecomp.component';
import { QuestcompComponent } from './component/question/questcomp/questcomp.component';
import { QuestioncompComponent } from './component/question/questioncomp/questioncomp.component';
import { CourseComponent } from './component/course/course.component';
import { QuestionComponent } from './component/question/question.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { ResponseComponent } from './component/response/response.component';
import { UsertrainingComponent } from './component/usertraining/usertraining.component';
import { UsertrainingquestrepComponent } from './component/usertrainingquestrep/usertrainingquestrep.component';
import { TrainingComponent } from './TrainingComponents/training/training.component';
import { AddcourseComponent } from './TrainingComponents/Course/addcourse/addcourse.component';
import { ListtrainingComponent } from './TrainingComponents/Course/listtraining/listtraining.component';
import { DeletetrainingComponent } from './TrainingComponents/Training/deletetraining/deletetraining.component';
import { DeletecourseComponent } from './TrainingComponents/Course/deletecourse/deletecourse.component';
import { AddtrainingComponent } from './TrainingComponents/Training/addtraining/addtraining.component';


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
    ListRequestAnalysisComponent,
    AddRequestAnalysisComponent,
    TraininglistComponent,
    TraininglistComponent,
    CoursecompComponent,
    QuestcompComponent,
    QuestioncompComponent,
    CourseComponent,
    QuestionComponent,
    QuizComponent,
    ResponseComponent,
    UsertrainingComponent,
    UsertrainingquestrepComponent,
    TrainingComponent,
    AddcourseComponent,
    ListtrainingComponent,
    DeletetrainingComponent,
    DeletecourseComponent,
    AddtrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [  {
    provide: WebSocketServiceService,
    useFactory: (client: Client) => {
      return new WebSocketServiceService(client);
    },
    deps: [Client]
  },
    {
      provide: Client,
      useValue: Stomp.client('ws://localhost:9999/socket')
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
