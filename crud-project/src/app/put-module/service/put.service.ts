import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Product from "src/app/common/model/product.model";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class PutService{
    constructor(private http:HttpClient){}
    public updateProduct(obj:Product):Observable<Product>{
        return this.http.put<Product>(`http://localhost:3000/products/${obj.id}`,obj);
    }
};