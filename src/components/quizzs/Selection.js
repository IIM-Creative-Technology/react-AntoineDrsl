import React from "react";
import Card from "./selection/Card";

class Selection extends React.Component {
    render() {
        const Select = this.props.quizzList.map((quizz, i) => {
            return(
                <div onClick={() => this.props.selectQuizz(quizz.name)} key={i} className="selectionCard">
                    <Card theme={quizz.theme} image={quizz.image} />
                </div>
            )
        });

        return(
            <div className="selection">
                {Select}
            </div>
        )
    }
}

export default Selection;