import { createReducer, on } from "@ngrx/store";
import { deleteProduct, deleteProductFail, deleteProductSuccess } from "../actions/delete.actions";
import DeleteState from "../state/delete.state";
const initialState:DeleteState = {
    message : "",
    error : ""
}
const _deleteReducer = createReducer(initialState,on(deleteProduct,(state)=>{
    return{
        ...state,
        message:"",
        error:""
    }
}),on(deleteProductSuccess,(state,action)=>{
    return{
        ...state,
        message:action.message,
        error:""
    }
}),on(deleteProductFail,(state,action)=>{
    return{
        ...state,
        message:"",
        error:action.error
    }
}))

export function deleteReducer(state:any,action:any){
    return _deleteReducer(state,action);
}

