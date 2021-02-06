import loadingIcon from "../../../images/loading-icon-white.png";

function Loading() {
    return(
        <div className="loading">
            <img src={loadingIcon} alt="Chargement..."/>
        </div>
    )
}

export default Loading;