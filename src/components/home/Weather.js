import axios from "axios";
import {useState, useEffect} from "react";
import Frame from "./Frame";
import Loading from "./Loading";

function Weather() {
    const [weather, setWeather] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const apiKey = "b9ad03fd414263457318a5b0d361aaed";

    useEffect(() => {
        async function getWeather() {
            let geo = false;
            try {
                geo = await getCurrentPosition();
            } catch(err) {
                geo = false;
            }

            let url = geo ? 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + geo.coords.latitude + '&lon=' + geo.coords.longitude + '&appid=' + apiKey : 'https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=' + apiKey;

            axios.get(url)
            .then((response) => {
                let videoName;
                switch(response['data'].weather[0].main) {
                    case "Clouds":
                        videoName = "cloud";
                        break;

                    case "Clear":
                        videoName = "clear";
                        break;

                    case "Rain": case "Drizzle": case "Fog": case "Mist":
                        videoName = "rain";
                        break;

                    case "Thunderstorm":
                        videoName = "storm";
                        break;

                    case "Snow":
                        videoName = "snow";
                        break;

                    default:
                        videoName = "clear";
                        break;
                }
                if(response['data'].weather[0].icon.slice(-1) === "n") {
                    videoName += "-night";
                }
                import('../../images/weather/' + videoName + '.mp4').then(video => {
                    setWeather({
                        ...response['data'],
                        icon: "http://openweathermap.org/img/wn/" + response['data'].weather[0].icon + "@2x.png",
                        video: video.default
                    });
                    setLoaded(true);
                })
            });
        }
        getWeather();
    }, []);

    return(
        <div className="weatherSection">
            {loaded ? <Frame weather={weather} /> : <Loading/>}
        </div>
    )
}

function getCurrentPosition() {
    return new Promise((res, err) => {
        navigator.geolocation.getCurrentPosition(res, err, {
            timeout: 5000
        });
    });
}

export default Weather;