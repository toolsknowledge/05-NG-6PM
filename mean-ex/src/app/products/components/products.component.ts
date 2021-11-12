import { Component } from "@angular/core";
import { ProductsService } from "../services/products.service";

@Component({
    selector:"products",
    templateUrl:"./products.component.html"
})
export class ProductsComponent{
    constructor(private service:ProductsService){}
    ngOnInit(){
        this.service.getProducts().subscribe((posRes)=>{
            console.log(posRes);
        },(errRes)=>{
            console.log(errRes);
        })
    }
}