import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Duty} from "../../../Model/HrManagementModels/Duty";
import {Holiday} from "../../../Model/HrManagementModels/Holiday";
import {PlanificationDuty} from "../../../Model/HrManagementModels/PlanificationDuty";
import {User} from "../../../Model/UserManagementModels/User";

@Injectable({
  providedIn: 'root'
})
export class DutyService {
  private baseUrl = environment.baseUrl + '/PlanificationDuty/';


  constructor(private http: HttpClient) {
  }

  Dutylist(): Observable<PlanificationDuty[]> {
    return this.http.get<PlanificationDuty[]>(this.baseUrl + 'Planifications');
  }
  JustDutylist(): Observable<number[]> {
    return this.http.get<number[]>(this.baseUrl + 'lastid');
  }
  Usernamelist(): Observable<String[]> {
    return this.http.get<String[]>(this.baseUrl + 'username');
  }
  DutylistbyUser(username: any): Observable<PlanificationDuty[]> {
    return this.http.get<PlanificationDuty[]>(this.baseUrl + 'PlanificationDutylistbyuser/'+username);
  }
  addDuty(id:any, username: any, data:any): Observable<PlanificationDuty> {
    return this.http.post<PlanificationDuty>(this.baseUrl + 'PlanifierDutyToUser/'+id+'/'+username,data);
  }
  JustaddDuty(data: any): Observable<Duty> {
    return this.http.post<Duty>(this.baseUrl + 'addDuty/', data);
  }
  deleteDuty(id: any) {
    return this.http.delete(this.baseUrl + '' + id);
  }

  updateDuty(data: any, id: any, idduty: any):Observable<PlanificationDuty> {
    return this.http.put<PlanificationDuty>(this.baseUrl + 'UpdatePlanificationDuty/'+id+'/'+idduty, data);
  }
}
