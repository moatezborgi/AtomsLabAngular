import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {VariablesService} from "./variables.service";
import {Observable} from "rxjs";
import {ResetPasswordRequest} from "../../../Model/UserManagementModels/ResetPassword";
import {map} from "rxjs/operators";
import {UserResponse} from "../../../Model/UserManagementModels/UserResponse";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private host:string="http://localhost:8080/passwordreset";

  constructor(private http:HttpClient) { }
/*
.subscribe(
      (response: any) => {
        const token = response;
        // do something with the token, e.g., store it in a variable or pass it to another function
      },
      (error: any) => {
        console.log(error);
      }
    );
  */
  forgotPassword(username: string) : any {

    return this.http.post(`${this.host}/forgot-password/`+username,null).subscribe(data=>data);

  }


  resetPassword(resetpswd:ResetPasswordRequest) {
    return this.http.post(`${this.host}/reset-password`, resetpswd);
  }
}
