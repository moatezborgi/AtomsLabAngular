import { Injectable } from '@angular/core';
import {Question} from "../../Model/trainingmodels/Question";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quiz} from "../../Model/trainingmodels/Quiz";
import {Response} from "../../Model/trainingmodels/Response";

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private baseUrl = environment.baseUrl + '/Response/';


  constructor(private http: HttpClient) {
  }

  retrieveAll(): Observable<Response[]> {
    return this.http.get<Response[]>(this.baseUrl + 'all');
  }

  add(data: any): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + 'addresponse', data);
  }

  remove(id: any) {
    return this.http.delete(this.baseUrl + 'removequiz/' + id);
  }

  update(data: any, id: any):Observable<Response> {
    return this.http.put<Response>(this.baseUrl + 'updateresponse/' +id, data);
  }
}
