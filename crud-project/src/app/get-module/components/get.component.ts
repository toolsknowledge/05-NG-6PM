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
    totalProducts:any={};
    constructor(private store:Store){
        this.loading = false;
        this.products = [];
        this.error = "";
    }

    ngOnInit(){
        //subscribe the result
        this.store.select(getSelector).subscribe((posRes)=>{
           const {products,post} = posRes;
           
           if(post.loading){
               const product = post.product;
               const allProducts = products.products;
               console.log(allProducts);
               console.log([product]);
               this.totalProducts = [...allProducts,...[product]];
               
           }else{
               this.loading = products.loading;
               this.totalProducts = products.products;
               this.error = products.error;
           }


            // if(posRes.post.loading){
               
            //     const {loading,products,error} = posRes.products;
            //     this.loading = loading;
            //     this.products = {...products,...posRes.post.product};
            //     console.log(products);
            //     this.error = error;
            // }else{
                //const {loading,products,error} = posRes.products;
                //this.loading = loading;
                //this.products = products;
                //this.error = error;
            // }
            
            
           
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