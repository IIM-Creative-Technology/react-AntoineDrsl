import React from "react";
import randomize from "../../utility/randomize";
import Question from "./quizz/Question";
import Result from "./quizz/Result";

class Quizz extends React.Component {
    questions = randomize(this.props.quizz.questions);

    constructor(props) {
        super(props);
        this.state = {
            question: 0,
            maxQuestion: this.questions.length,
            score: 0
        }
    }

    nextQuestion = (isCorrect) => {
        this.setState({
            question: this.state.question + 1,
            score: isCorrect === true ? this.state.score + 1 : this.state.score
        });
    }

    render() {
        return(
            <div className="quizz">
                { this.state.question < this.state.maxQuestion ? <Question question={this.questions[this.state.question]} nextQuestion={this.nextQuestion} /> : <Result score={this.state.score} total={this.state.maxQuestion} returnToSelection={this.props.returnToSelection} /> }
            </div>
        )
    }
}

export default Quizz;