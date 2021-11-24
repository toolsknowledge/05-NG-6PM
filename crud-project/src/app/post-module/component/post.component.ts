import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { productPost } from "../actions/post.actions";
import { postSelector } from "../selector/post.selector";
import PostState from "../state/post.state";

@Component({
    selector:"post-product",
    templateUrl:"./post.component.html"
})
export class PostComponent{
    constructor(private store:Store<PostState>){}

    ngOnInit(){
        this.store.select(postSelector).subscribe((posRes)=>{
            console.log(posRes);
        },(errRes)=>{
            console.log(errRes);
        });
    }

    addRecord():any{
        this.store.dispatch(productPost({"product":{id:666,p_name:"p_six",p_cost:60000}}))       
    }
}