import React, { Component, Fragment } from "react";

class UserCount extends Component{
    state = {
        userValue: 0
    }

    valueHandler = (ev) => {
       this.setState({
        [ev.target.name] : ev.target.value
       })
    }

    render(){
        return (<Fragment>
            <div>
                <input type="number" name="userValue" 
                    value={this.state.userValue} 
                    onChange={this.valueHandler} />   

                    <button 
                    onClick={this.props.getUpdatedUserValue.bind(this,parseInt(this.state.userValue))}>
                        Done</button>             
            </div>

        </Fragment>)
    }
}

export default UserCount;