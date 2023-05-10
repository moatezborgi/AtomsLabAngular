import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {WebSocketServiceService} from "../../Services/WebSocketServices/web-socket-service.service";
import {ToastrService} from "ngx-toastr";
import {NotificationService} from "../../Services/HrManager/Notification/notification.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  messages: string[] = [];
  getCurrentTime1(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  getCurrentTime(): string {
    const notificationTime = new Date();
    const currentTime = new Date();
    const timeDiff = currentTime.getTime() - notificationTime.getTime();
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return 'now';
    } else if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (days < 2) {
      return 'yesterday';
    } else {
      return notificationTime.toLocaleDateString();
    }
  }
  constructor(private router: Router,private webSocketService: WebSocketServiceService,private toastr: ToastrService,private notificationService: NotificationService) {
    notificationService.subscribe(message => {
      this.messages.push(message);
    });
  }

}
