import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpringService {

  constructor(private http:HttpClient) { }

  public getProducts():Observable<any>{
      return this.http.get("http://localhost:5000/api/v1/products");
  };



}
