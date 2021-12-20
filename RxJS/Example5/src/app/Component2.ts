import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { DemoService } from "./demo.service";

@Component({
    selector:"comp2",
    templateUrl:"./comp2.component.html"
})
export class Component2{
    result:any;
    constructor(private service:DemoService){}
    ngOnInit(){
        this.result = this.service.get();
    }
}