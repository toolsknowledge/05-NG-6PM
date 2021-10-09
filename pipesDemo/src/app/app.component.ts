import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   var_one:string = "angular13";
   var_two:string = "SPRING BOOT";
   var_three:Date = new Date();
   var_four:any = {"key1":"value1",
                    "key2":"value2",
                   "key3":"value3"};
   var_five:number = 100;
   var_six:number = 0.9;
   var_seven:number = 100.12345;
   var_eight:number[] = [10,20,30,40,50];


  //Promise class
  //then()
   var_nine:any;

    constructor(){
         this.var_nine = new Promise((resolove,reject)=>{
            resolove("welcome to promises");
         });
    };


    custom_pipe:string = "Hello";


   


}
