import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Holiday} from "../../../Model/HrManagementModels/Holiday";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private baseUrl = environment.baseUrl + '/Reclamation/';


  constructor(private http: HttpClient) {
  }

  Holidaylist(): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(this.baseUrl + 'Holidaylist');
  }
  HolidaylistbyUser(username: any): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(this.baseUrl + 'Holidaylistbyuser/'+username);
  }
  addassignHoliday(data: any): Observable<Holiday> {
    return this.http.post<Holiday>(this.baseUrl + 'addassignHoliday', data);
  }

  deleteHoliday(id: any) {
    return this.http.delete(this.baseUrl + '' + id);
  }

  UpdateHoliday(data: any, id: any):Observable<Holiday> {
    console.log("data : ",data)
    return this.http.put<Holiday>(this.baseUrl + 'UpdateHoliday/' +id, data);
  }
}
