import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../Services/AuthenticationConfig/login.service";
import {UserService} from "../../Services/UserManagementService/UserService/user.service";
import {UserResponse} from "../../Model/UserManagementModels/UserResponse";

@Component({
  selector: 'app-retrieve-users',
  templateUrl: './retrieve-users.component.html',
  styleUrls: ['./retrieve-users.component.css']
})
export class RetrieveUsersComponent implements OnInit{

  list!:UserResponse[];
  table: any;
  constructor(private router: Router,  private userService:UserService) {
    this.table = null;

  }


  ngOnInit(): void {
    this.userService.retrieveUsers().subscribe(data=>this.list=data);
  }



}
