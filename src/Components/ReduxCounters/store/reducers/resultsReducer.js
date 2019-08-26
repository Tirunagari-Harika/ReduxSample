import resultsInitialState from "../initialStores/result";
import * as actionTypes from "../actions/actionTypes";

const resultsReducer = (state = resultsInitialState, action) => {
    console.log("Result Reducer ", state, action);
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {  results: state.results.concat(action.payload) };   
                     
        case actionTypes.DELETE_RESULT:
            return { results: state.results.filter(result => result.id !== action.payload) };
        default:
            return state;
    }
}

export { resultsReducer };