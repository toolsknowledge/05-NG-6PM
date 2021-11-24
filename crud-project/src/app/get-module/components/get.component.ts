import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import Product from "src/app/common/model/product.model";
import { productPost } from "src/app/post-module/actions/post.actions";
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
    displayStyle = "none";

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


    addRecord():any{
        this.displayStyle = "block";
    };

    closePopup():any{
        this.displayStyle = "none";
    }

    saveRecord():any{
        let p_id:any = document.getElementById("p_id");
        let p_name:any = document.getElementById("p_name");
        let p_cost:any = document.getElementById("p_cost");
        let record = {id:p_id.value,p_name:p_name.value,p_cost:p_cost.value};
        this.store.dispatch(productPost({"product":record}));
        this.displayStyle = "none";
    }


}