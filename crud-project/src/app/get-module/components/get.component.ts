import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import Product from "src/app/common/model/product.model";
import { deleteProduct } from "src/app/delete-module/actions/delete.actions";
import { productPost } from "src/app/post-module/actions/post.actions";
import { updateProduct } from "src/app/put-module/actions/update.actions";
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
    displayStyle1 = "none";
    totalProducts:any={};
    constructor(private store:Store){
        this.loading = false;
        this.products = [];
        this.error = "";
    }

    ngOnInit(){
        
        this.store.dispatch(getProducts())
        this. _subscription();
    }

    _subscription():any{
        this.store.select(getSelector).subscribe((posRes:any)=>{
            const {products} = posRes;
            const {post} = posRes;
            if(post.loading){
                const {products} = posRes;
                console.log(post.product);
                this.totalProducts = [...products.products,...[post.product]]
            }

            this.loading = products.loading;
            this.totalProducts = products.products;
            this.error = products.error;
        },(errRes:any)=>{
            console.log(errRes);
        })
    }

    addRecord():any{
        this.displayStyle = "block";
    };

    closePopup():any{
        this.displayStyle = "none";
    }

    saveRecord():any{
        this. _subscription();
        let p_id:any = document.getElementById("p_id");
        let p_name:any = document.getElementById("p_name");
        let p_cost:any = document.getElementById("p_cost");
        let record = {id:p_id.value,p_name:p_name.value,p_cost:p_cost.value};
        this.store.dispatch(productPost({"product":record}));
        this.displayStyle = "none";
        
    }


    deleteProduct(id:any):any{
        this.store.dispatch(deleteProduct({"id":id}));
        this. _subscription();
    }

    editProduct(product:any){
        this.displayStyle1 = "block"
        let _id = document.getElementById("_id");
        let _name = document.getElementById("_name");
        let _cost = document.getElementById("_cost");
        (<HTMLInputElement>_id).value = product.id;
        (<HTMLInputElement>_name).value = product.p_name;
        (<HTMLInputElement>_cost).value = product.p_cost;
    }


    updateRecord():any{
        let _id:any = document.getElementById("_id");
        let _name:any = document.getElementById("_name");
        let _cost:any = document.getElementById("_cost");
        let record1 = {id:_id.value,p_name:_name.value,p_cost:_cost.value};
        this.store.dispatch(updateProduct({"product":record1}));
        this.displayStyle1 = "none"
        this. _subscription();
    };

    closeUpdatePopup():any{
        this.displayStyle1 = "none"
    };

}