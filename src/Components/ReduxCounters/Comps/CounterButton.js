import React, {Component, Fragment} from "react";

const btnStyle = {
    backgroundColor:"orange",
    height:"50px",
    color:"white",
    display:"inline-block"
}

class CounterButton extends Component{
    render(){
        return (<Fragment>
            <button onClick={this.props.taskHandler} 
                style={btnStyle}>{this.props.task}</button>
        </Fragment>)
    }

}

export default CounterButton;