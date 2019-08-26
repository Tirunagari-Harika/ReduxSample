import * as actionTypes from "../actions/actionTypes";

const decCounterReducer = (state=0, action) => {
  // console.log("decCOunter_Reducer ", state, action);
    switch(action.type){
        case actionTypes.DEC:
            return  state - 1;
        case actionTypes.SUB:
            return state - action.payload;
        default:
            return state;
    }
}

export { decCounterReducer };