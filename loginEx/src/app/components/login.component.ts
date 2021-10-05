import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";
@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})
export class LoginComponent{
    public result:any;
    public obj:any = {"email":"",
                      "password":""};
    constructor(private service:LoginService){}
    public login(){
        this.result = this.service.loginFn(this.obj);
    }
}