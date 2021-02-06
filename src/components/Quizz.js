import React from "react";
import "../Sass/components/_quizz.scss";
import quizzData from "../data/quizz.json";
import Selection from "./quizz/Selection";

class Quizz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenQuizz: false
        }
    }

    selectQuizz = (theme) => {
        this.setState({
            chosenQuizz: theme
        });
    }

    render() {
        return(
            <div className="quizzPage">
                {this.state.chosenQuizz ? this.state.chosenQuizz : <Selection quizzList={quizzData.list} selectQuizz={this.selectQuizz} />}
            </div>
        )
    }
}

export default Quizz;