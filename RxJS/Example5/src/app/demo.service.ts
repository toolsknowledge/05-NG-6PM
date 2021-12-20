import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class DemoService{
    subject = new Subject<string>();

    set(data:string){
        this.subject.next(data);
    }

    get():Observable<string>{
        return this.subject.asObservable()
    }
};