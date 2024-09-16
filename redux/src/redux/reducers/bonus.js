import { INCREMENT } from "../actions/amount"

export default function bonusReducer(state={points:0}, action){
    switch(action.type){
        case INCREMENT:
            return {points : state.points + 1}
        default:
            return state
    }
}