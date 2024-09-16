import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import {thunk} from 'redux-thunk'
//principles of redux

// single source of truth
// States are immutable (states are read only)
// reducer should be pure

const history = []

//action name constants

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const INCREMENTBYAMOUNT = 'incrementByAmount'
const INIT = "init"
export const getUserPending = "getUserPending"
export const getUserFulfilled = "getUserFulfilled"
export const getUserRejected = 'getUserRejected'

//store
const store = createStore(combineReducers({
    account : accountReducer,
    bonus : bonusReducer
}), applyMiddleware(logger.default, thunk));

//to add mutliple reducer we should use combine reducer and give a name to each reducer.

//reducers are functions which have 2 parameters - state and action
//reducer always return a state.

//reducer
function accountReducer(state={amount : 1}, action){
    // if(action.type===INCREMENT){
    //     //immutability
    //     //we shouldn't change the state directly.


    //     //wrong way 
    //     //return state.amount = state.amount+1  //use array example


    //     return {amount : state.amount+1} //always create a copy
    // }
    // if(action.type === DECREMENT){
    //     return {amount : state.amount-1}
    // }
    // if(action.type === INCREMENTBYAMOUNT){
    //     return {amount : state.amount + action.payload}
    // }

    switch(action.type){
        case INIT:
            return {amount : action.payload}
        case INCREMENT:
            return {amount : state.amount + 1}
        case DECREMENT:
            return {amount : state.amount - 1}
        case INCREMENTBYAMOUNT:
            return {amount : state.amount + action.payload}
        case getUserFulfilled:
            return {amount : action.payload, pending: false}
        case getUserRejected:
            return {...state, error: action.error, pending: false}
        case getUserPending:
            return {...state, pending: true}
        default:
            return state
        }

}

function bonusReducer(state={points:0}, action){
    switch(action.type){
        case INCREMENT:
            return {points : state.points + 1}
        default:
            return state
    }
}



//action creators

//async function getUser(dispatch, getState){
//     //this way gives an error saying actions should return plain objects instead it should return promise
//     //it suggests to use thunk

//     let {data} = await axios.get("http://localhost:3000/amount/1");

//     dispatch(initUser(data.amount))
// }



export function getUser(id){
    return async (dispatch, getState) => {
        try{
            dispatch(getAccUserPending())
            let {data} = await axios.get(`http://localhost:300/amount/${id}`);
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


function initUser(value){
    return { type: INIT, payload : value}
}

function increament(){
    return {type: INCREMENT}
}

function decreament(){
    return {type: DECREMENT}
}

function increamentByAmount(value){
    console.log(value)
    return {type: INCREMENTBYAMOUNT, payload: value}
}


// global state
// console.log(store.getState())    //gives the state

setInterval(()=>{
    // history.push(store.getState())    used to check the prev state in the history array.
    //store.dispatch(increament())
    // console.log(history)

    //store.dispatch(decreament())
    //store.dispatch(increamentByAmount(5))

    //for using thunk send the function directly, rather than function call which returns an object.
    //store.dispatch(initState())

    store.dispatch(getUser(3))
    
}, 2000)

// Async API

// async function getUser(){
//     let {data} = await axios.get("http://localhost:3000/amount/1");
//     console.log(data);
// }

//all the states get updated if we follow the wrong way.

// store.subscribe(()=>{
//     array.push(store.getState())
//     console.log(array);
// })

//action


// console.log(store.getState())





//store
//reducer
//dispatch
//action
//middleware