import { useDispatch, useSelector } from "react-redux"
import { minusvalue, plusvalue } from "../../store/actions/actions"
import { asyncplusvalue,asyncminusvalue } from "../../store/actions/actionSaga"

export const Counter = () =>{
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    const counter = state.counter

    
    
    const plusfunc = (payload) =>{
        dispatch(asyncplusvalue(payload))
      
    }

    const minusfunc=(payload)=>{
        dispatch(asyncminusvalue(payload))
       
    }




    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>plusfunc('+')}>+</button>
            <button onClick={()=>minusfunc('-')}>-</button>
        </div>
    )
}