import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Holiday} from "../../../Model/HrManagementModels/Holiday";
import {Reclamation} from "../../../Model/HrManagementModels/Reclamation";

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private baseUrl = environment.baseUrl + '/PDF/';


  constructor(private http: HttpClient) {
  }

  GeneratePDF(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'generate-pdf');
  }
  ALLReclamationlist(): Observable<Reclamation[]> {
    console.log( this.baseUrl + 'Reclamationlistangular')
    return this.http.get<Reclamation[]>(this.baseUrl + 'Reclamationlistangular');
  }
  // HolidaylistbyUser(username: any): Observable<Holiday[]> {
  //   return this.http.get<Holiday[]>(this.baseUrl + 'Holidaylistbyuser/'+username);
  // }
  // addassignHoliday(data: any): Observable<Holiday> {
  //   return this.http.post<Holiday>(this.baseUrl + 'addassignHoliday', data);
  // }
  //
  deleteRec(id: any) {
    return this.http.delete(this.baseUrl + '' + id);
  }
  accept(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AccepterReclamation/'+id,{});
  }
  reject(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'RejectReclamation/'+id,{});
  }
  //
  // UpdateHoliday(data: any, id: any):Observable<Holiday> {
  //   console.log("data : ",data)
  //   return this.http.put<Holiday>(this.baseUrl + 'UpdateHoliday/' +id, data);
  // }
}
