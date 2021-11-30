import { createFeatureSelector, createSelector } from "@ngrx/store";
//import GetState from "../state/get.state";

export const getSelector = createSelector(createFeatureSelector("all-reducers"),(state:any)=>{
    return state;
});