import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { updateProduct } from "../actions/update.actions";
import { putSelector } from "../selector/put.selector";
import PutState from "../state/put.state";

@Component({
    selector:"put-component",
    templateUrl:"./put.component.html"
})
export class PutComponent{
    constructor(private store:Store<PutState>){}
    obj = {"id":555,p_name:"p_five",p_cost:50000}
    updateProduct(){
        this.store.dispatch(updateProduct({"product":this.obj}))
    };
    ngOnInit(){
        this.store.select(putSelector).subscribe((posRes)=>{
            console.log(posRes);
        },(errRes)=>{
            console.log(errRes);
        })       
    }
}