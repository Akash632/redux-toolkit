import axios from 'axios'

export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const INCREMENTBYAMOUNT = 'incrementByAmount'
export const INIT = "init"
export const getUserPending = "getUserPending"
export const getUserFulfilled = "getUserFulfilled"
export const getUserRejected = 'getUserRejected'


export function getUser(id){
    return async (dispatch, getState) => {
        try{
            dispatch(getAccUserPending())
            let {data} = await axios.get(`http://localhost:3000/amount/${id}`);
            dispatch(getAccUserFulfilled(data.amount))   
        }
        catch(err){
            console.log("error", err)
            dispatch(getAccUserRejected(err.message))
        }
    }
}

export function getAccUserFulfilled(value){
    return {type: getUserFulfilled, payload : value};
}

export function getAccUserRejected(value){
    return {type: getUserRejected, error: value}
}

export function getAccUserPending(){
    return {type: getUserPending}
}

export function initUser(value){
    return { type: INIT, payload : value}
}

export function increament(){
    return {type: INCREMENT}
}

export function decreament(){
    return {type: DECREMENT}
}

export function increamentByAmount(value){
    return {type: INCREMENTBYAMOUNT, payload: value}
}