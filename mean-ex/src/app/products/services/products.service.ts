import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class ProductsService{
    constructor(private http:HttpClient){}
    public getProducts():Observable<any>{
        let str:any = window.localStorage.getItem("mean_project");
        let obj = JSON.parse(str);
        return this.http.get("http://localhost:8080/products",{headers:{"token":obj.token}});
    }
}