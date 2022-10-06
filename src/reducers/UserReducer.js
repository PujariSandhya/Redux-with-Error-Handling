import * as ActionType from '../actions/ActionType';
let initialState ={
    data:[],
    error:""
}
export const UserReducer =(state=initialState, action)=>{
    switch(action.type){
        case ActionType.GET_DATA:{
            return{                
                ...state,data:state.data.concat (action.payload)
            }
        }
        case ActionType.USER_ERROR:{
            return{
               ...state, error: action.payload,
            }
        }
        default:
            return state;
    }
}

