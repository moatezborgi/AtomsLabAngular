import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {VariablesService} from "../UserManagementService/UserService/variables.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,private variables:VariablesService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    if (!helper.isTokenExpired(token)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(request);
    }



    return next.handle(request);
  }
}
