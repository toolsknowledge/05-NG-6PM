import { createFeatureSelector, createSelector } from "@ngrx/store";
import PutState from "../state/put.state";

export const putSelector = createSelector(createFeatureSelector<PutState>("update"),(state)=>{
    return state;
})