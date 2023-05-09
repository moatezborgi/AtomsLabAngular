import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Training} from "../../Model/trainingmodels/Training";
import {Quiz} from "../../Model/trainingmodels/Quiz";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = environment.baseUrl + '/Quiz/';


  constructor(private http: HttpClient) {
  }

  retrieveAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.baseUrl + 'all');
  }

  add(data: any): Observable<Quiz> {
    return this.http.post<Quiz>(this.baseUrl + 'addquiz', data);
  }

  remove(id: any) {
    return this.http.delete(this.baseUrl + 'removequiz/' + id);
  }

  update(data: any, id: any):Observable<Quiz> {
    return this.http.put<Quiz>(this.baseUrl + 'updatequiz/' +id, data);
  }
}
