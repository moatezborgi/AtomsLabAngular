import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserResponse} from "../../../Model/UserManagementModels/UserResponse";
import {VariablesService} from "./variables.service";
import { map } from 'rxjs/operators';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Role} from "../../../Model/UserManagementModels/Role";
import {UserDto} from "../../../Model/UserManagementModels/UserDto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host:string="http://localhost:8080/user";



  constructor(private http:HttpClient,private variables:VariablesService) { }

  retrieveUsers(): Observable<UserResponse[]> {
    //const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get<UserResponse[]>(`${this.host}/`);
  }

  //const options = { headers: headers };
 getUserRoleByUsername(username:string) :Observable<UserResponse>{
    return this.http.get<UserResponse>(`${this.host}/role/${username}`);
  }

  retrieveUserById(id:number):Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.host}/${id}`);
  }
  loadUserByUsername(username:string):Observable<UserResponse> {
    console.log(username)
    return this.http.get<UserResponse>(`${this.host}/username/${username}`);
  }
  enableUserAcount(id:number) {
    return this.http.put(`${this.host}/enable/${id}`,null);
  }

  desableUserAcount(id:number) {
    return this.http.put(`${this.host}/disable/${id}`,null);
  }

  save(user:UserDto) {
    return this.http.post<UserResponse>(`${this.host}/`, user,{observe:'response'})
  }


  updateUser(id:number, user:any):Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.host}/${id}`, user);
  }
  deleteUser(id:number) {
    return this.http.delete(`${this.host}/${id}`);
  }
  affectRoleToUser(id:number, role:Role):Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.host}/affect/${id}`, role);
  }
  affectDescRoleToUser(username:string, descrole:string):Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.host}/affect/${username}/${descrole}`, null);
  }

  /*
  getStat() {
    return this.http.get(`${this.host}/stat/`);
  }*/
  currentUser():Observable<UserResponse>{
    const token = localStorage.getItem('token');
    if (token==null){
      throw new Error("no current user");
    }
    const helper = new JwtHelperService();
    const usern= helper.decodeToken(token).sub;

    console.log(usern);

    return this.loadUserByUsername(usern);
  }
}
