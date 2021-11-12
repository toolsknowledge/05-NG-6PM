import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";

@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})

export class LoginComponent{
    login_details:any={"email":"","password":""};
    constructor(private service:LoginService,
                private router:Router){}
    login():any{
        this.service.login_fn(this.login_details).subscribe((posRes)=>{
            if(posRes.login == "success"){
                window.localStorage.setItem("mean_project",JSON.stringify(posRes));
                this.router.navigate(["/products"]);
            }
        },(errRes)=>{
            console.log(errRes);
        });
    }
}