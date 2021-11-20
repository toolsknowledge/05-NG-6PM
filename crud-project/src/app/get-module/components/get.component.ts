import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import Product from "src/app/common/model/product.model";
import { getProducts } from "../actions/get.actions";
import { getSelector } from "../selector/get.selector";

@Component({
    selector:"get-component",
    templateUrl:"./get.component.html"
})

export default class GetComponent{
    variant:string = "danger";
    loading:boolean;
    products:Product[];
    error:string;
    
    constructor(private store:Store){
        this.loading = false;
        this.products = [];
        this.error = "";
    }

    ngOnInit(){
        //subscribe the result
        this.store.select(getSelector).subscribe((posRes)=>{
            const {loading,products,error} = posRes;
            this.loading = loading;
            this.products = products;
            this.error = error;
        },(errRes)=>{
            console.log(errRes);
        })

        //connect to actions
        this.store.dispatch(getProducts())
    }

}