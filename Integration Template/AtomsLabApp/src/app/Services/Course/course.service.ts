import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Course} from "../../Model/trainingmodels/Course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = environment.baseUrl + '/Course/';


  constructor(private http: HttpClient) {
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + 'allcourses');
  }

  add(data: any):  Observable<HttpResponse<any>> {
      return this.http.post(this.baseUrl + 'addcourse', data, { observe: 'response' }).pipe(
      map(response => {
        console.log(response)
        return response;
      })
    );
  }

  remove(id: any) {
    return this.http.delete(this.baseUrl + 'removecourse/' + id);
  }

  update(id:any,data: any):Observable<Course> {
    let course={
      idcourse :data.idcourse,
      descriptioncourse :data.descriptioncourse,
      name:data.name ,
      fileUrl:data.urlFIle
    }


    console.log(course)

    return this.http.put<Course>(this.baseUrl + 'updatecourse/', course);
  }
getcourseById(id:number):Observable<Course> {

    return this.http.get<Course>(this.baseUrl + 'getcourse/'+id);
}
}
