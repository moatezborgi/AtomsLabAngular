import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {WebSocketServiceService} from "../Services/WebSocketServices/web-socket-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private webSocketService: WebSocketServiceService) {}



  }
