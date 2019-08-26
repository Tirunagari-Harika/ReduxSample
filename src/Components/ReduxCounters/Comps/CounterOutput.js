import React, { Component, Fragment } from "react";

const styledObj = {
    backgroundColor:"grey",
    height:"100px",
    width:"200px",
    border:"2px solid grey",
    borderRadius:"5px",
    fontSize:"20px"
}

class CounterOutput extends Component{
    render(){
        return (<Fragment>
            <div className={styledObj}>{this.props.counterValue}</div>
        </Fragment>)
    }
}

export default CounterOutput;