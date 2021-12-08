import { Component } from '@angular/core';

import { Service1 } from './services/service1.service';
import { Service2 } from './services/service2.service';
import { forkJoin } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    result1:any;
    result2:any;
  
    constructor(private service1:Service1,
                private service2:Service2){
        this.result1 = {};
        this.result2 = {};
    }

    ngOnInit(){
        forkJoin([this.service1.getCustomers(),
                  this.service2.getData()]).subscribe((posRes:any)=>{
                      this.result1 = posRes[0];
                      this.result2 = posRes[1];
                  },(errRes:HttpErrorResponse)=>{
                    if(errRes.error instanceof Error){
                      console.log("client side error");
                    }else{
                      console.log("server side error");
                    }
      })
    }
}
