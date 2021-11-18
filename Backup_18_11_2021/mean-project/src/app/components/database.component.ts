import { Component } from "@angular/core";

@Component({
    selector:"database",
    templateUrl:"./database.component.html"
})

export default class DatabaseComponent{
    public databaseFn():string{
        return "MongoDB";
    }
}