import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, mergeMap,map } from "rxjs/operators";
import { deleteProduct, deleteProductFail, deleteProductSuccess } from "../actions/delete.actions";
import { DeleteService } from "../services/delete.service";

@Injectable({
    providedIn:"root"
})
export class DeleteEffects{
    constructor(private service:DeleteService,
                private actions$:Actions){}
    delete$ = createEffect(()=>this.actions$.pipe(
        ofType(deleteProduct),
        mergeMap((action:any)=>this.service.deleteProduct(action.id).pipe(map((posRes:any)=>{
            return deleteProductSuccess({"message":"success"})
        }),catchError((errRes:any)=>of(deleteProductFail({"error":"Network Fail"})))))
    ))
}