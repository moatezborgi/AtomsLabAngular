import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserResponse} from "../../../Model/UserManagementModels/UserResponse";
import {VariablesService} from "./variables.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host:string="http://localhost:8080/user";



  constructor(private http:HttpClient,private variables:VariablesService) { }

  retrieveUsers(): Observable<UserResponse[]> {
    //const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get<UserResponse[]>(`${this.host}/`, { headers:this.variables.headers });
  }

  //const options = { headers: headers };
 getUserRoleByUsername(username:string) {
    return this.http.get(`${this.host}/role/${username}`);
  }

  retrieveUserById(id:number) {
    return this.http.get(`${this.host}/${id}`);
  }
  loadUserByUsername(username:string) {
    return this.http.get(`${this.host}/${username}`);
  }
  enableUserAcount(id:number) {
    return this.http.put(`${this.host}/enable/${id}`,null);
  }

  desableUserAcount(id:number) {
    return this.http.put(`${this.host}/disable/${id}`,null);
  }

  save(user:any) {
    return this.http.post(`${this.host}/`, user);
  }

  updateUser(id:number, user:any) {
    return this.http.put(`${this.host}/${id}`, user);
  }
  deleteUser(id:number) {
    return this.http.delete(`${this.host}/${id}`);
  }
  affectRoleToUser(id:number, role:any) {
    return this.http.put(`${this.host}/affect/${id}`, role);
  }
  affectDescRoleToUser(username:string, descrole:string) {
    return this.http.put(`${this.host}/affect/${username}/${descrole}`, null);
  }

  /*
  getStat() {
    return this.http.get(`${this.host}/stat/`);
  }*/
}
