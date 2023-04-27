import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Training} from "../../Model/trainingmodels/Training";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private baseUrl = environment.baseUrl + '/Training/';


  constructor(private http: HttpClient) {
  }

  retrieveAllTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.baseUrl + 'all');
  }

  addTraining(data: any): Observable<Training> {
    return this.http.post<Training>(this.baseUrl + 'addTraining', data);
  }

  removeTraining(id: any) {
    return this.http.delete(this.baseUrl + 'removeTraining/' + id);
  }

  updateTraining(data: any, id: any):Observable<Training> {
    return this.http.put<Training>(this.baseUrl + 'updateTraining/' +id, data);
  }
}
