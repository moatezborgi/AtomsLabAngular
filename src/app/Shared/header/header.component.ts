import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../Services/AuthenticationConfig/login.service";
import {UserService} from "../../Services/UserManagementService/UserService/user.service";
import {UserResponse} from "../../Model/UserManagementModels/UserResponse";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() curUser!:UserResponse;
  constructor(  private router: Router,  private loginService: LoginService,  private userService: UserService) {
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }



  /*currentUserCredentials(){
    this.userService.currentUser().subscribe(
      user=>this.curUser=user
    )
    console.log(this.curUser)
  }*/

  ngOnInit(): void {

  }

}
