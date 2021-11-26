import { createReducer, on } from "@ngrx/store";
import { updateProduct, updateProductFail, updateProductSuccess } from "../actions/update.actions";
import PutState from "../state/put.state";

const initialState:PutState = {
    loading:false,
    product:{id:0,p_name:"",p_cost:0},
    error:""
};

const _putReducer = createReducer(initialState,on(updateProduct,(state)=>{
    return{
        ...state,
        loading:false,
        product:{id:0,p_name:"",p_cost:0},
        error:""          
    }
}),on(updateProductSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        product:action.product,
        error:""    
    }
}),on(updateProductFail,(state,action)=>{
    return{
        ...state,
        loading:true,
        product:{id:0,p_name:"",p_cost:0},
        error:action.error    
    }
}));

export function putReducer(state:any,action:any){
    return _putReducer(state,action);
}

