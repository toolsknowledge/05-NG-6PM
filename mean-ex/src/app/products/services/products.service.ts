import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class ProductsService{
    constructor(private http:HttpClient){}
    public getProducts():Observable<any>{
        return this.http.get("http://05mean6pm-env.eba-umeyhjg2.ap-south-1.elasticbeanstalk.com/products");
    }
}