import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SamplingType} from "../../Model/RequestAnalysisModels/SamplingType";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SettingsAnalysisServiceService {
  private baseUrl = environment.baseUrl+'/ParametresAnalysisManegementController/';

  constructor(private http: HttpClient) { }


  retrieveAllSamplingType(): Observable<SamplingType[]> {
    return this.http.get<SamplingType[]>(this.baseUrl+'retrieveAllSamplingType');

  }
}
