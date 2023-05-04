import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Message, WebSocketServiceService} from "./Services/WebSocketServices/web-socket-service.service";
import { ToastrService } from 'ngx-toastr';
import {UserResponse} from "./Model/UserManagementModels/UserResponse";
import {UserService} from "./Services/UserManagementService/UserService/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtomsLabApp';
  curUser!:UserResponse;
  constructor(private router: Router,private webSocketService: WebSocketServiceService,private toastr: ToastrService,  private userService: UserService) {}
  isLoginPage() {
    return this.router.url === '/login';
  }
  isErrorPage() {
    return this.router.url === '/error';
  }
  isResetPage(){
    return this.router.url === '/resetpassword';

  }
  isResetPage2(){
    return this.router.url.includes('/forgetpassword');

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
    this.userService.currentUser().subscribe(
      user=>this.curUser=user
    )
    console.log(this.curUser)
  }
  /*currentUserCredentials(){
    this.userService.currentUser().subscribe(
      user=>this.curUser=user
    )
    console.log(this.curUser)
  }*/


}
