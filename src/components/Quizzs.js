import React from "react";
import "../Sass/components/_quizz.scss";
import quizzData from "../data/quizz.json";
import Selection from "./quizzs/Selection";
import Quizz from "./quizzs/Quizz";

class Quizzs extends React.Component {
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
                {this.state.chosenQuizz ? <Quizz quizz={quizzData.details[this.state.chosenQuizz]}/> : <Selection quizzList={quizzData.list} selectQuizz={this.selectQuizz}/>}
            </div>
        )
    }
}

export default Quizzs;