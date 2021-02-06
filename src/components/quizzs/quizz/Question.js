import React from "react";
import Response from "./Response";
import randomize from "../../../utility/randomize";

class Question extends React.Component {
    render() {
        const randomResponses = randomize(this.props.question.responses);
        const Responses = randomResponses.map((response, i) => {
            return(
                <Response key={i} response={response} nextQuestion={this.props.nextQuestion} />
            )
        });

        return(
            <div className="question">
                {this.props.question.question}
                { this.props.question.image ? <img src={require('../../../images/quizz/pokemon/' + this.props.question.image).default} alt={this.props.question.question} className="questionImage"/> : ""}
                <div className="responses">
                    {Responses}
                </div>
            </div>
        )
    }
}

export default Question;