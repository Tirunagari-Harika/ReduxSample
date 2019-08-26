import counterState from "../initialStores/counter";
import * as actionTypes from "../actions/actionTypes";
import { addCounterReducer } from "./addCounterReducer";
import { decCounterReducer } from "./decCounterReducer";

const counterReducer = (state=counterState, action) => {
    console.log("Counter_Reducer ", state, action, counterState);
    let newState = {};
     switch(action.type){
        case actionTypes.INC:
            newState = { ...state, counter: addCounterReducer(state.counter,action) };
            break;            
        case actionTypes.ADD:
            newState = { ...state, counter: addCounterReducer(state.counter,action) };
            break;  
        case actionTypes.DEC:
            newState = { ...state, counter: decCounterReducer(state.counter,action) };
            break;
        case actionTypes.SUB:
            newState = { ...state, counter: decCounterReducer(state.counter,action) };
            break;
        default:
            console.log(state); //- executing this default
            return state;        
     }
    // console.log(newState);
     return newState;
}

export { counterReducer };