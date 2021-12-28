import { Component, Input, SimpleChange } from "@angular/core";

@Component({
    selector:"child",
    templateUrl:"./child.component.html"
})
export class ChildComponent{
    @Input() parentData:any;

    clickMe():any{
        this.parentData -= 1;
    }

    ngOnChanges(changes:SimpleChange){
        console.log(changes);
    }
}