import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../../Model/trainingmodels/Course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = environment.baseUrl + '/Course/';


  constructor(private http: HttpClient) {
  }

  retrieveAllCOurses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + 'all');
  }

  add(data: any): Observable<Course> {
    return this.http.post<Course>(this.baseUrl + 'addcourse', data);
  }

  remove(id: any) {
    return this.http.delete(this.baseUrl + 'removecourse/' + id);
  }

  update(data: any, id: any):Observable<Course> {
    return this.http.put<Course>(this.baseUrl + 'updatecourse/' +id, data);
  }

}
