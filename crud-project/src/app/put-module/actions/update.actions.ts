import { createAction, props } from "@ngrx/store";
import Product from "src/app/common/model/product.model";
import { UPDATE_PRODUCT, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_SUCCESS } from "../types/update.types";
export const updateProduct = createAction(UPDATE_PRODUCT,props<{"product":Product}>());
export const updateProductSuccess = createAction(UPDATE_PRODUCT_SUCCESS,props<{"product":Product}>());
export const updateProductFail = createAction(UPDATE_PRODUCT_FAIL,props<{"error":string}>());