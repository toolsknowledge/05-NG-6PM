import { Component } from "@angular/core";
@Component({
    selector:"frontend",
    templateUrl:"./frontend.component.html"
})
export class FrontendComponent{
   public uiFunction():string{
       return "Angular 13";
   }
}