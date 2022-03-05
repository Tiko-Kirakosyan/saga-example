import { MINUS_VALUE, PLUS_VALUE } from "../actions/actions"




const InitialState ={
    counter: 0,
}


export const CountReducer = (state=InitialState,action)=>{
    const {counter} = state

    switch(action.type){
        case PLUS_VALUE:
            if(action.payload === '+'){
                return{...state,counter:counter + 1}
            }
        case MINUS_VALUE:
            if(action.payload === '-'){
                return{...state,counter:counter - 1}
            }

       
            

            default:
                return state

    }
}