import { Component } from '@angular/core';
import {WebSocketServiceService} from "../Services/WebSocketServices/web-socket-service.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  constructor(private webSocketService: WebSocketServiceService) {}

  public sendMessage(): void {
    const message = {
      type: 'notif',
      message: 'test notif temp reel',
      from: 'me',
      to: 'you',
      role:'biologiste'
    };
    this.webSocketService.sendMessage(message);
  }
}
