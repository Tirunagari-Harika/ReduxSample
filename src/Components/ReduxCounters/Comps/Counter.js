import React, { Component, Fragment } from "react";
import CounterOutput from "./CounterOutput";
import CounterButton from "./CounterButton";
import Results from "./Results";
import UserCount from "./UserCount";

/* import * as actionTypes from "../store/actions/actionTypes"; */
import * as actionCreators from "../store/actions/actionCreators";

import { connect } from "react-redux";

class Counter extends Component{

    state = {
        showUserCount:false,
        currentFunc: null
    }

    getUpdatedUserValue = (val,ev) => {
        console.log(val);
        this.setState({ showUserCount:false },() => {
            this.state.currentFunc(val);
        });
        
    }

    addCounter = () => {
        this.setState({ showUserCount:true,
             currentFunc:this.props.addCount });
    }

    subCounter = () => {
        this.setState({ showUserCount:true,
            currentFunc:this.props.subCount });
    }
    

    storeResult = () => {
        const obj = { id:new Date(), value: this.props.ctr };
        this.props.storeResult(obj);
    }
    
    render(){
        console.log("PROPS ",this.props);
        return (<Fragment>
            <CounterOutput counterValue={this.props.ctr}/>
            <CounterButton task="INCREMENT" taskHandler={this.props.incCounter}/>
            <CounterButton task="ADD 5" taskHandler={this.addCounter}/>
            <CounterButton task="DECREMENT" taskHandler={this.props.decCount}/>
            <CounterButton task="SUBSTRACT 5" taskHandler={this.subCounter}/>
            <button onClick={this.storeResult}>
                Store Result
            </button>

            {this.state.showUserCount ? 
                (<UserCount  getUpdatedUserValue={this.getUpdatedUserValue}/>) : null}
            <Results results={this.props.results}
                deleteResult={this.props.deleteResult}/>
        </Fragment>)
    }
}

const mapStateToProps = state => {
    console.log("STATE ",state.count.counter, state.results.results);
    return { 
        ctr: state.count.counter,
        results: state.results.results
    }
}

/* const mapDispatchToProps = dispatch => {
    return {
        incCounter: () => dispatch({type:"INC"}),
        addCount: () => dispatch({type:"ADD",value:5})
    }
} */

const mapDispatchToProps = dispatch => {
    return {
        incCounter: () => actionCreators.INC_ActionCreator(dispatch),
        addCount : (value) => actionCreators.ADD_ActionCreator(dispatch,value),
        decCount: () => actionCreators.DEC_ActionCreator(dispatch),
        subCount: (value) => actionCreators.SUB_ActionCreator(dispatch,value),
        storeResult: (resultObj,ev) => actionCreators.StoreResult_ActionCreator(dispatch,resultObj),
        deleteResult: (resultEleId,ev) =>  actionCreators.DeleteResult_ActionCreator(dispatch, resultEleId)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
