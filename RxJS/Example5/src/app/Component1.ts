import { Component } from "@angular/core";
import { DemoService } from "./demo.service";

@Component({
    selector:"comp1",
    templateUrl:"./comp1.component.html"
})
export class Component1{
    constructor(private service:DemoService){}

    clickMe(data:any){
        this.service.set(data);
    }
}