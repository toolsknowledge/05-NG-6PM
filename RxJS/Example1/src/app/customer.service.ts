import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customers } from "./model/Customer";
@Injectable({
    providedIn:"root"
})
export class CustomerService{
    constructor(private http:HttpClient){}

    public getCustomers():Observable<Customers>{
        return this.http.get<Customers>(`https://www.w3schools.com/angular/customers.php`);
    }
}