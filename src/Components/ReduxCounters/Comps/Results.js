import React, { Fragment } from "react";

const Results = props => {
    return (<Fragment>
        <ul>
            {props.results.map((result,i) => (
                <li key={i}
                    onClick={props.deleteResult.bind(this,result.id)}>{result.value}</li>
            ))}
        </ul>
    </Fragment>)
}

export default Results;

