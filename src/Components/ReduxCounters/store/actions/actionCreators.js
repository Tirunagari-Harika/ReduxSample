import * as actionTypes from "./actionTypes";

export const INC_ActionCreator = (dispatch) => {
    //console.log("Increment_ActionCreator ");
    dispatch({ type:actionTypes.INC })
}

export const ADD_ActionCreator = (dispatch,value) => {
   // console.log("Add_ActionCreator ",value);
    dispatch({ type:actionTypes.ADD, payload:value })
}

export const DEC_ActionCreator = (dispatch) => {
   // console.log("Decrement_ActionCreator");
    dispatch({ type:actionTypes.DEC });
}

export const SUB_ActionCreator = (dispatch,value) => {
   // console.log("Sub_ActionCreator ",value);
    dispatch({ type:actionTypes.SUB, payload:value });
}

export const StoreResult_ActionCreator = (dispatch, resultObj) => {
    console.log("StoreResult_ActionCreator ",resultObj);
    dispatch({ type:actionTypes.STORE_RESULT, payload: resultObj });
}

export const DeleteResult_ActionCreator = (dispatch, resultEleId) => {
    console.log("DeleteResult_ActionCreator ", resultEleId);
    dispatch({ type:actionTypes.DELETE_RESULT, payload:resultEleId });
}