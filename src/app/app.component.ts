import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Message, WebSocketServiceService} from "./Services/WebSocketServices/web-socket-service.service";
import { ToastrService } from 'ngx-toastr';
import {NotificationService} from "./Services/HrManager/Notification/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtomsLabApp';

  constructor(private router: Router,private webSocketService: WebSocketServiceService,private toastr: ToastrService,private notificationService: NotificationService) {
  }
  isLoginPage() {
    return this.router.url === '/login';
  }
  isErrorPage() {
    return this.router.url === '/error';
  }
  isResetPage(){
    return this.router.url === '/resetpassword';

  }


  ngOnInit() {
    if(!(this.isLoginPage() && this.isResetPage())) {
      this.webSocketService.connect().subscribe(message => {
        let receive = JSON.parse(JSON.stringify(message));
        if(receive.type=='notif') {
          this.toastr.warning(receive.message, 'Notification');
        }

      });
     }

  }



}
