export const PLUS_VALUE = 'PLUS_VALUE'
export const MINUS_VALUE = 'MINUS_VALUE'



export const plusvalue=(payload)=>{
    return{type:PLUS_VALUE,payload}
}


export const minusvalue = (payload)=>{
    return{type:MINUS_VALUE,payload}
}