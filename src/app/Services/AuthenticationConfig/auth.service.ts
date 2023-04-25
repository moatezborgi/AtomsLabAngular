import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/login';
  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient) { }

/*
  login(username: string, password: string) {
    return this.http.post<any>(this.apiUrl, { username, password }).toPromise()
      .then(response => {
        localStorage.setItem(this.tokenKey, response.token);
      });
  }*/
  login(username: string, password: string) {
    return lastValueFrom(this.http.post<any>(this.apiUrl, { username, password }).pipe(
      map(response => {
        localStorage.setItem(this.tokenKey, response.token);
      })
    ));
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
