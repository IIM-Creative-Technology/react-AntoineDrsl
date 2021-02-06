import React from "react";
import Question from "./quizz/Question";

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
        console.log(this.state.score);
        return(
            <div className="quizz">
                { this.state.question < this.state.maxQuestion ? <Question question={this.questions[this.state.question]} nextQuestion={this.nextQuestion} /> : this.state.score }
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

export default Quizz;