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
import { AddReactifComponent } from './InventaireManager/Reactif/add-reactif/add-reactif.component';
import { ListReactifComponent } from './InventaireManager/Reactif/list-reactif/list-reactif.component';
import { DeleteReactifComponent } from './InventaireManager/Reactif/delete-reactif/delete-reactif.component';
import { UpdateReactifComponent } from './InventaireManager/Reactif/update-reactif/update-reactif.component';


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
    AddReactifComponent,
    ListReactifComponent,
    DeleteReactifComponent,
    UpdateReactifComponent
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
