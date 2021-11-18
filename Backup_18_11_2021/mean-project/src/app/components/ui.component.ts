import { Component } from "@angular/core";

@Component({
    selector:"ui",
    templateUrl:"./ui.component.html"
})
export default class UIComponent{
    public uiFun():string{
        return "Angular 13";
    }
}