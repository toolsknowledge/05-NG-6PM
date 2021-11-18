import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EcommerceModel } from '../model/ecommerce-model';
@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor(private http:HttpClient) { }

  public getProducts():Observable<EcommerceModel[]>{
    return this.http.get<EcommerceModel[]>("http://localhost:8080/api/products");
  }


}
