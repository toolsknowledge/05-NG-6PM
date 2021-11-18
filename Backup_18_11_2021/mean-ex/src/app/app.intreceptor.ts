import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class AppIntreceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
      
        if(req.url == "http://05mean6pm-env.eba-umeyhjg2.ap-south-1.elasticbeanstalk.com/products"){
            console.log("Hello");      
            let str:any = window.localStorage.getItem("mean_project");
            let obj = JSON.parse(str);
            const req1 = req.clone({
                setHeaders:{
                    "token" : obj.token
                }
            });
            console.log(obj.token);
            return handler.handle(req1);
        }else{
            return handler.handle(req);
        }
    }
}