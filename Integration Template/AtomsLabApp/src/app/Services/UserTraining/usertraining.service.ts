import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Training} from "../../Model/trainingmodels/Training";
import {UserTraining} from "../../Model/trainingmodels/UserTraining";

@Injectable({
  providedIn: 'root'
})
export class UsertrainingService {
  private baseUrl = environment.baseUrl + '/UserTraining/';


  constructor(private http: HttpClient) {
  }

  retrieveAllTrainings(): Observable<UserTraining[]> {
    return this.http.get<UserTraining[]>(this.baseUrl + 'all');
  }

  add(data: any, id:any): Observable<UserTraining> {
    return this.http.post<UserTraining>(this.baseUrl + 'addUserT' +id , data);
  }

  remove(id: any) {
    return this.http.delete(this.baseUrl + 'removeUt/' + id);
  }

  update(data: any, id: any):Observable<UserTraining> {
    return this.http.put<UserTraining>(this.baseUrl + 'updateut/' +id, data);
  }
}
