import { Component } from "@angular/core";

@Component({
    selector:"backend",
    templateUrl:"./backend.component.html"  
})
export default class BackendComponent{
    public backendFn():string{
        return "NodeJS";
    }
}