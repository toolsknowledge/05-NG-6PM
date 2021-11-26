import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { PutService } from "../service/put.service";
import { createEffect } from "@ngrx/effects";
import { updateProduct, updateProductFail, updateProductSuccess } from "../actions/update.actions";
import { mergeMap,map,catchError } from "rxjs/operators";
import Product from "src/app/common/model/product.model";
import { of } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class PutEffects{
    constructor(private service:PutService,
                private actions$:Actions){}
    putEffects$ = createEffect(()=> this.actions$.pipe(
        ofType(updateProduct),
        mergeMap((action:any)=>this.service.updateProduct(action.product).pipe(map((posRes:Product)=>{
            return updateProductSuccess({"product":posRes});
        }),catchError((err)=>of(updateProductFail({"error":"Network Error"})))))
    ))
}