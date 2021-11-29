import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class DeleteService{
    constructor(private http:HttpClient){}
    public deleteProduct(id:any):Observable<any>{
        return this.http.delete(` http://localhost:3000/products/${id}`);
    }
}