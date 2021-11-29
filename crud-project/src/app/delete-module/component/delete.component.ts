import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { deleteProduct } from "../actions/delete.actions";
import { deleteSelector } from "../selector/delete.selector";
import DeleteState from "../state/delete.state";

@Component({
    selector:"delete-product",
    templateUrl:"./delete.component.html"
})
export class DeleteComponent{
    constructor(private store:Store<DeleteState>){}

    ngOnInit(){
        this.store.select(deleteSelector).subscribe((posRes)=>{
            console.log(posRes);
        },(errRes)=>{
            console.log(errRes);
        })
    }

    deleteProductById():any{
        this.store.dispatch(deleteProduct({"id":333}));
    }

}