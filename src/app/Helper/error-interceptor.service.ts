import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {
  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          // Redirige vers la page de connexion si l'utilisateur est non authentifié ou pas autorisé
         } else {
           this.router.navigate(['/error'], { state: { code: error.status, message: error.message } });
        }
        return throwError(error);
      })
    );
  }
}
