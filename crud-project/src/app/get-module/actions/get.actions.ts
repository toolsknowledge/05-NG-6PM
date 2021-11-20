import { createAction, props } from "@ngrx/store";
import Product from "src/app/common/model/product.model";
import { GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS } from "../types/get.types";
export const getProducts = createAction(GET_PRODUCTS);
export const getProductsSuccess = createAction(GET_PRODUCTS_SUCCESS,props<{"products":Product[]}>());
export const getProductsFail = createAction(GET_PRODUCTS_FAIL,props<{"error":string}>());