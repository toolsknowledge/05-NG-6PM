import { createFeatureSelector, createSelector } from "@ngrx/store";
import PostState from "../state/post.state";
export const postSelector = createSelector(createFeatureSelector("post"),(state:PostState)=>{
    return state;
});