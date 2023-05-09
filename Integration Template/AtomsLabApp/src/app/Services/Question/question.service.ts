import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../../Model/trainingmodels/Course";
import {Question} from "../../Model/trainingmodels/Question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = environment.baseUrl + '/Question/';


  constructor(private http: HttpClient) {
  }

  retrieveAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseUrl + 'all');
  }

  add(data: any): Observable<Question> {
    return this.http.post<Question>(this.baseUrl + 'addquestion', data);
  }

  remove(id: any) {
    return this.http.delete(this.baseUrl + 'removequestion/' + id);
  }

  update(data: any, id: any):Observable<Question> {
    return this.http.put<Question>(this.baseUrl + 'updatequestion/' +id, data);
  }

}
