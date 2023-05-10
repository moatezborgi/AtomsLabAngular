import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
   token =localStorage.getItem('token');
   headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  constructor() { }
}
