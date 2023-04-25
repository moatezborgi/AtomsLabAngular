import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../Services/AuthenticationConfig/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(  private router: Router,  private loginService: LoginService) {
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
