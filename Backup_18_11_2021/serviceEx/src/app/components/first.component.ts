import { Component } from "@angular/core";
import EmpService from "../services/emp.service";

@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})
export default class FirstComponent{
    public employees:any;

    constructor(private service:EmpService){}

    ngOnInit(){
        this.employees = this.service.getEmployees();
    }

    

}