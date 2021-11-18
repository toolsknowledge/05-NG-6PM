import { Component } from "@angular/core";
import { ProductsService } from "../services/products.service";

@Component({
    selector:"products",
    templateUrl:"./products.component.html"
})
export class ProductsComponent{
    products:any[] = [];
    constructor(private service:ProductsService){}
    ngOnInit(){
        this.service.getProducts().subscribe((posRes)=>{
            this.products = posRes;
        },(errRes)=>{
            console.log(errRes);
        })
    }
}