import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class LoginService{
    constructor(private http:HttpClient){}
    public login_fn(login_details:any):Observable<any>{
        return this.http.post("http://05mean6pm-env.eba-umeyhjg2.ap-south-1.elasticbeanstalk.com/login",login_details);
    }
}