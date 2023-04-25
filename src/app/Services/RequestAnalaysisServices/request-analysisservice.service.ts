import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Patient} from "../../Model/RequestAnalysisModels/Patient";

@Injectable({
  providedIn: 'root'
})
export class RequestAnalysisserviceService {
  private baseUrl = environment.baseUrl+'/RequestAnalysis/';

  constructor(private http: HttpClient) { }

  retrievePatientbyindex(index:any): Observable<Patient> {
    return this.http.get<Patient>(this.baseUrl+'RetrievePatientByindex/'+index);
  }
}
