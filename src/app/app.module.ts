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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";
import {JwtInterceptor} from "./Services/AuthenticationConfig/jwt.interceptor";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import { RetrieveUsersComponent } from './UserAccount/retrieve-users/retrieve-users.component';
import {ErrorInterceptorService} from "./Helper/error-interceptor.service";
import { ForgetPasswordComponent } from './UserAccount/forget-password/forget-password.component';
import { UserFromComponent } from './UserAccount/user-from/user-from.component';
import {RouterModule} from "@angular/router";
import {AuthGuard} from "./Services/AuthenticationConfig/auth.guard";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { ChangePasswordComponent } from './UserAccount/change-password/change-password.component';



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
    RetrieveUsersComponent,
    ForgetPasswordComponent,
    UserFromComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    NgxDatatableModule
   ],
  exports: [RouterModule],

  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    {provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptorService, multi: true},
    {
    provide: WebSocketServiceService, useFactory: (client: Client) => {return new WebSocketServiceService(client); },    deps: [Client]
  },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService, // add JwtHelperService to the providers array
    {
      provide: Client,
      useValue: Stomp.client('ws://localhost:9999/socket')
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
