import * as actionTypes from "../actions/actionTypes";

const addCounterReducer = (state=0, action) => {
  // console.log("AddCounter_Reducer ", state, action);
   switch(action.type){
        case actionTypes.INC:
            return state + 1;
        case actionTypes.ADD:
            return state + action.payload;
        default:
            return state;
    }  
/* 
    if(action.type === "ADD") return { ...state, counter: state.counter + action.value }
    if(action.type === "INC") return {...state, counter:state.counter + 1}

    return state; */
}

export { addCounterReducer };