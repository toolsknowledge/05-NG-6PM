import { createAction, props } from "@ngrx/store";
import { DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS } from "../types/delete.types";
export const deleteProduct = createAction(DELETE_PRODUCT,props<{"id":any}>());
export const deleteProductSuccess = createAction(DELETE_PRODUCT_SUCCESS,props<{"message":string}>());
export const deleteProductFail = createAction(DELETE_PRODUCT_FAIL,props<{"error":string}>());