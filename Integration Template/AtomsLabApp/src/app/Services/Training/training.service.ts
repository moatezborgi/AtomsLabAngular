import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
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

  addTraining(data: any):  Observable<HttpResponse<any>> {
    return this.http.post(this.baseUrl + 'addTraining', data, { observe: 'response' }).pipe(
      map(response => {
        console.log(response)
        return response;
      })
    );
  }

  removeTraining(id: any) {
    return this.http.delete(this.baseUrl + 'removeTraining/' + id);
  }

  updateTraining(data: any, id: any):Observable<Training> {
    return this.http.put<Training>(this.baseUrl + 'updateTraining/' +id, data);
  }
}
