//simple typescript "class" behaves like "component"
//collection of "variables" and "functions" called as "class"
//we can create the class by using "class" keyword
//we can define constructor by using "constructor" keyword

import { Component } from "@angular/core";
@Component({
   selector:"ashokit",
   templateUrl : "./first.component.html" 
})
export class FirstComponent{
    private var_one:string;
    private var_two:string;
    private var_three:string;

    constructor(){
        this.var_one = "Angular 13";
        this.var_two = "NodeJS";
        this.var_three = "MongoDB";
    }

    public getSubOne():string{
        return this.var_one;
    }

    public getSubTwo():string{
        return this.var_two;
    }

    public getSubThree():string{
        return this.var_three;
    }


}
