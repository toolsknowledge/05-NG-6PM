import { Component } from "@angular/core";
@Component({
    selector:"customer",
    templateUrl:"./customer.component.html"
})
export class CustomerComponent{
    msg:string;
    constructor(){
        this.msg = "welcome to customer module";
    }
}