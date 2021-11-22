import { createReducer, on } from "@ngrx/store";
import { productPost, productPostFail, productPostSuccess } from "../actions/post.actions";
import PostState from "../state/post.state";
const initialState:PostState = {
    loading:false,
    product:{id:0,
             p_name:"",
             p_cost:0},
    error:""
}

const _postReducer = createReducer(initialState,on(productPost,(state)=>{
    return{
        ...state,
        loading:false,
        product:{id:0,p_name:"",p_cost:0},
        error:""
    }
}),on(productPostSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        product:action.product,
        error:""
    }
}),on(productPostFail,(state,action)=>{
   return{
        ...state,
        loading:true,
        product:{id:0,p_name:"",p_cost:0},
        error:action.error   
   } 
}))
export function postReducer(state:any,action:any){
    return _postReducer(state,action);
}

