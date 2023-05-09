import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Role} from "../../../Model/UserManagementModels/Role";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private host:string="http://localhost:8080/role";

  constructor(private http:HttpClient) { }


  addRole(role:any) {
    return this.http.post(`${this.host}/`, role);
  }

  retrieveRoles():Observable<Role[]> {
    return this.http.get<Role[]>(`${this.host}/`);
  }

  retrieveRoleById(id:number) {
    return this.http.get(`${this.host}/${id}`);
  }

  updateRole(id:number, role:any) {
    return this.http.put(`${this.host}/${id}`, role);
  }
  deleteRole(id:number) {
    return this.http.delete(`${this.host}/${id}`);
  }

}
