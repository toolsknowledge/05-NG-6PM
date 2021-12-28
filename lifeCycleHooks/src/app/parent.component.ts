import { Component } from "@angular/core";

@Component({
    selector:"parent",
    templateUrl:"./parent.component.html"
})
export class ParentComponent{
    data:number;
    constructor(){
        this.data = 0;
    }
    clickMe(){
        this.data+=1;
    }
}