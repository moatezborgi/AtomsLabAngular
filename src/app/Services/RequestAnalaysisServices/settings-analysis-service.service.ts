import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SamplingType} from "../../Model/RequestAnalysisModels/SamplingType";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SettingsAnalysisServiceService {
  private baseUrl = environment.baseUrl+'/ParametresAnalysisManegementController/';

  constructor(private http: HttpClient) { }


  retrieveAllSamplingType(): Observable<SamplingType[]> {
    return this.http.get<SamplingType[]>(this.baseUrl+'retrieveAllSamplingType');

  }
  addSamplingType(samplingtype: string): Observable<HttpResponse<any>> {
    const data = { descSampling: samplingtype };
    return this.http.post(this.baseUrl + 'addSamplingType', data, { observe: 'response' }).pipe(
      map(response => {
        return response;
      })
    );
  }

}
