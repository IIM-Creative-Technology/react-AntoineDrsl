import React from "react";

class Response extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'normal'
        }
    }

    showResponse = (isCorrect) => {
        this.setState({
            status: isCorrect ? 'correct' : 'error'
        });
        setTimeout(() => {
            this.setState({
                status: 'normal'
            });
            this.props.nextQuestion(isCorrect);
        }, 1000);
    }

    render() {
        return(
            <div className={`responseCard ${this.state.status}`} onClick={() => this.showResponse(this.props.response.isCorrect)}>
                {this.props.response.response}
            </div>
        )
    }
}

export default Response;