import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { productPost, productPostFail, productPostSuccess } from "../actions/post.actions";
import { PostService } from "../service/post.service";
import { mergeMap,map, catchError } from "rxjs/operators";
import Product from "src/app/common/model/product.model";
import { of } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class postEffects{
    constructor(private service:PostService,
                private actions$:Actions){}

    public postEffect = createEffect(()=>this.actions$.pipe(
        ofType(productPost),
        mergeMap((action:any)=>this.service.postData(action.product).pipe(map((posRes:Product)=>{
            return productPostSuccess({"product":posRes})
        }),catchError((err:any)=>of(productPostFail({"error":"Network Fail"})))))
    ))  
    
}