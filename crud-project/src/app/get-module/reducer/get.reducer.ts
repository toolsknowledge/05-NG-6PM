import { createReducer, on } from "@ngrx/store";
import { getProducts, getProductsFail, getProductsSuccess } from "../actions/get.actions";
import GetState from "../state/get.state";

const initialState:GetState = {
    loading:false,
    products:[],
    error:""
};

const _getReducer = createReducer(initialState,on(getProducts,(state)=>{
    return{
        ...state,
        loading:false,
        products:[],
        error:""
    }
}),on(getProductsSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:action.products,
        error:""    
    }
}),on(getProductsFail,(state,action)=>{
   return{
       ...state,
       loading:true,
       products:[],
       error:action.error
   } 
}))
export function getReducer(state:any,action:any){
    return _getReducer(state,action);   
}