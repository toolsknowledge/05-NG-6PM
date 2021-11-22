import { createAction, props } from "@ngrx/store";
import Product from "src/app/common/model/product.model";
import { POST_PRODUCT, POST_PRODUCT_FAIL, POST_PRODUCT_SUCCESS } from "../types/post.types";
export const productPost = createAction(POST_PRODUCT,props<{"product":Product}>());
export const productPostSuccess = createAction(POST_PRODUCT_SUCCESS,props<{"product":Product}>());
export const productPostFail = createAction(POST_PRODUCT_FAIL,props<{"error":string}>());