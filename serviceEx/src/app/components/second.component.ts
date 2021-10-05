import { Component } from "@angular/core";
import EmpService from "../services/emp.service";
@Component({
    selector:"second",
    templateUrl:"./second.component.html"
})
export default class SecondComponent{
    public sal_statement:any;
    
    constructor(private service:EmpService){}
    
    ngOnInit(){
        this.sal_statement = this.service.getSalaryStatment();
    }
}