import { Component, Input } from "@angular/core";

@Component({
    selector:"alert-component",
    templateUrl:"./alert-component.html"
})
export class AlertComponent{
    @Input() message = "";
    @Input() variant = "";
}