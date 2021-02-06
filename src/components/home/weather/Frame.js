import Time from './Time';

function Frame(props) {
    return(
        <div className="weather">
            <div className="weatherVideo">
                <video autoPlay muted loop id="video">
                    <source src={props.weather.video} type="video/mp4"/>
                </video>
            </div>
            <div className="weatherInfo">
                <div>
                    <div className="bold">{props.weather.name}</div>
                    <Time/>
                </div>
                <div className="center thin">
                    <div>{Math.round(props.weather.main.temp).toString()}°C</div>
                    <img src={props.weather.icon} alt="wheater"/>
                </div>
                <div className="sub-info">
                    <div id="feelsLike">
                        <div className="bold">Ressenti</div>
                        <div className="thin">{Math.round(props.weather.main.feels_like).toString()}°C</div>
                    </div>
                    <div>
                        <div className="bold">Humidité</div>
                        <div className="thin">{Math.round(props.weather.main.humidity).toString()}%</div>
                    </div>
                    <div>
                        <div className="bold">Vent</div>
                        <div className="thin">{Math.round(props.weather.wind.speed).toString()}m/sec</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frame;