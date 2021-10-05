import { Component } from "@angular/core";
@Component({
    selector:"backend",
    templateUrl:"./backend.component.html"
})
export class BackendComponent{
    public backendFunction():string{
        return "Spring Boot";
    }
}