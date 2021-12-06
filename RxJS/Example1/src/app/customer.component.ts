import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerService } from "./customer.service";
import { Customers } from "./model/Customer";

@Component({
    selector:"customer",
    templateUrl:"./customer.component.html"
})
export class CustomerComponent{
    customers:Customers;
    response:any;    
    constructor(private service:CustomerService){
        this.customers = {"records":[]};
        this.response = null;
    }

    ngOnInit(){

        this.response = this.service.getCustomers();

        /*
        this.service.getCustomers().subscribe((posRes:Customers)=>{
            this.customers = posRes;
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error){
                console.log("client side error");   
            }else{
                console.log("server side error");
            }
        });
        */
    }
}