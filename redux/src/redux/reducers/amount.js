import { INCREMENT, INIT, DECREMENT, INCREMENTBYAMOUNT, getUserFulfilled, getUserRejected, getUserPending } from "../actions/amount"

export default function accountReducer(state={amount : 100}, action){
    switch(action.type){
        case INIT:
            return {amount : action.payload}
        case INCREMENT:
            return {amount : state.amount + 100}
        case DECREMENT:
            return {amount : state.amount - 100}
        case INCREMENTBYAMOUNT:
            return {amount : state.amount + action.payload}
        case getUserFulfilled:
            return {amount: action.payload, pending:false}
        case getUserPending:
            return {...state, pending:true}
        case getUserRejected:
            return {...state, error: action.error, pending:false}
        default:
            return state
        }

}