import { createFeatureSelector, createSelector } from "@ngrx/store";
import GetState from "../state/get.state";

export const getSelector = createSelector(createFeatureSelector("products"),(state:GetState)=>{
    return state;
});