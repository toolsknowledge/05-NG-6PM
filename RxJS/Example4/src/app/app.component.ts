import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { retry } from "rxjs/operators";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Example4';
    constructor(private http:HttpClient){}
    ngOnInit(){
        this.http.get("https://reqrs.in/api/users?page=1").pipe(retry(4)).subscribe((posRes)=>{
            console.log(posRes);
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    }
}
