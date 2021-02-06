import React from "react";

class Result extends React.Component {
    render() {
        return(
            <div className="result">
                <div className="score" id="score">{this.props.score} / {this.props.total}</div>
                <div className="return" onClick={() => this.props.returnToSelection()}>Revenir à la sélection</div>
            </div>
        )
    }
}

export default Result;