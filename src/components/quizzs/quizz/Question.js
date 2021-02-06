import React from "react";
import Response from "./Response";

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
                <div className="responses">
                    {Responses}
                </div>
            </div>
        )
    }
}

function randomize(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const n = Math.floor(Math.random() * (i + 1));
        [array[i], array[n]] = [array[n], array[i]];
    }

    return array;
}

export default Question;