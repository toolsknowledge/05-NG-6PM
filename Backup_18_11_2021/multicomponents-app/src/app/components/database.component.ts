import { Component } from "@angular/core";
@Component({
    selector:"database",
    templateUrl:"./database.component.html"
})
export class DatabaseComponent{
    public databaseFn():string{
        return "MongoDB";
    }
}