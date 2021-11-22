import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Product from "src/app/common/model/product.model";
@Injectable({
    providedIn:"root"
})
export class PostService{
    constructor(private http:HttpClient){}

    public postData(obj:Product):Observable<Product>{
        return this.http.post<Product>(`http://localhost:3000/products`,obj);
    }
}