import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { getProducts, getProductsFail, getProductsSuccess } from "../actions/get.actions";
import GetService from "../service/get.service";
import {mergeMap,map, catchError} from "rxjs/operators";
import Product from "src/app/common/model/product.model";
import { of } from "rxjs";
@Injectable({
    providedIn:"root"
})
export default class GetEffects{
    constructor(private service:GetService,
                private actions$:Actions){}
    products$ = createEffect(()=> this.actions$.pipe(
        ofType(getProducts),
        mergeMap(()=>this.service.getProducts().pipe(map((posRes:Product[])=>{
            return getProductsSuccess({"products":posRes});
        }),catchError((err)=>of(getProductsFail({"error":"Network Fail"})))))
    ) );
}