import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reactif} from "../../../Model/StockManagementModels/Reactif";

@Injectable({
  providedIn: 'root'
})
export class ReactifService {
  private baseUrl = environment.baseUrl + '/reactif/';


  constructor(private http: HttpClient) {
  }

  retrieveAllReactifs(): Observable<Reactif[]> {
    return this.http.get<Reactif[]>(this.baseUrl + 'fetchallreactif');
  }

  addReactif(data: any): Observable<Reactif> {
    return this.http.post<Reactif>(this.baseUrl + 'addreactif', data);
  }

  deleteReactif(id: any) {
    return this.http.delete(this.baseUrl + 'deletereactif/' +id);
  }

  updateReactif(id:any,data:any):Observable<Reactif> {
    return this.http.post<Reactif>(this.baseUrl + 'updatereactif/' +id, data);
  }
}
