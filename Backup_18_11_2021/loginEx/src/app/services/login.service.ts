import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class LoginService{
    public loginFn(obj:{"email":string,"password":string}):{"result":string}{
        if(obj.email == "hr@ashokit.in" && obj.password == "ashokit"){
            return {"result":"Login Success"};
        }else{
            return {"result":"Login Fail"};
        }   
    }
}


