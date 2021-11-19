import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Product from "src/app/common/model/product.model";
@Injectable({
    providedIn:"root"
})
export default class GetService{
    constructor(private http:HttpClient){}
    public getProducts():Observable<Product[]>{
        return this.http.get<Product[]>("http://localhost:3000/products");
    }
}