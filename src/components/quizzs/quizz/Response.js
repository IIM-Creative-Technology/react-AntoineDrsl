import React from "react";

class Response extends React.Component {
    render() {
        return(
            <div className="responseCard" onClick={() => this.props.nextQuestion(this.props.response.isCorrect)}>
                {this.props.response.response}
            </div>
        )
    }
}

export default Response;