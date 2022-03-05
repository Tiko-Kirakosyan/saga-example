export const ASYNC_PLUS_VALUE = 'ASYNC_PLUS_VALUE'
export const ASYNC_MINUS_VALUE = 'ASYNC_MINUS_VALUE'



export const asyncplusvalue = (payload) =>{
    return{type:ASYNC_PLUS_VALUE,payload}
}

export const asyncminusvalue = (payload) =>{
    return{type:ASYNC_MINUS_VALUE,payload}
}