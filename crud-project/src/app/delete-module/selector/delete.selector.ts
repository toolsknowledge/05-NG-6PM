import { createFeatureSelector, createSelector } from "@ngrx/store";
import DeleteState from "../state/delete.state";
export const deleteSelector = createSelector(createFeatureSelector("delete-module"),(state:DeleteState)=>{
    return state;  
})