import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";

@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})

export class LoginComponent{
    login_details:any={"email":"","password":""};
    constructor(private service:LoginService){}
    login():any{
        this.service.login_fn(this.login_details).subscribe((posRes)=>{
            console.log(posRes);
        },(errRes)=>{
            console.log(errRes);
        });
    }
}