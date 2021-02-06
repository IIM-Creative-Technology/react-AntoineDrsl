function Card(props) {
    return(
        <div className="card">
            <img src={require('../../images/quizz/' + props.image).default} alt={props.theme} />
            <div className="cardText">
                {props.theme}
            </div>
        </div>
    )
}

export default Card;