import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Duty} from "../../../Model/HrManagementModels/Duty";
import {Holiday} from "../../../Model/HrManagementModels/Holiday";
import {PlanificationDuty} from "../../../Model/HrManagementModels/PlanificationDuty";
import {User} from "../../../Model/UserManagementModels/User";
import {DutyPlanificationDTO} from "../../../Model/HrManagementModels/DutyPlanificationDTO";

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
  userlist(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
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
  getdutyy(id: any): Observable<DutyPlanificationDTO> {
    return this.http.get<DutyPlanificationDTO>(this.baseUrl + 'PlanificationDutylistbyid/'+id);
  }
  addDuty(dto: { duty: {  id_duty: number;dateHeureDebut: string; dateHeureFin: string; type: any }; planificationDuty: { idPlanificationDuty: number; datePlanification: string;active: boolean;  } }, username: any): Observable<void> {
    return this.http.post<void>(this.baseUrl + 'PlanifierDutyToUser/'+username,dto);
  }
  JustaddDuty(data: any): Observable<Duty> {
    return this.http.post<Duty>(this.baseUrl + 'addDuty/', data);
  }
  deleteDuty(id: any) :Observable<any> {
    return this.http.delete(this.baseUrl + '' + id);
  }
  deleteDutyduty(id: any) :Observable<any> {
    return this.http.delete(this.baseUrl + 'removeduty/' + id);
  }
  updateDuty(dto: { duty: {  id_duty: number;dateHeureDebut: string; dateHeureFin: string; type: string }}, id: any, username: any):Observable<PlanificationDuty> {
    return this.http.put<PlanificationDuty>(this.baseUrl + 'UpdatePlanificationDutyangular/'+id+'/'+username, dto);
  }
  updateDutydate(data: any, id: any):Observable<Duty> {
    return this.http.put<Duty>(this.baseUrl + 'UpdateDuty/'+id, data);
  }
  mostuserchange():Observable<any>{
    return this.http.get<any>(this.baseUrl + 'mostUserChange');
  }

}
