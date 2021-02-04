import '../Sass/components/_home.scss';
import axios from "axios";
import React, {useState, useEffect} from "react";

function getCurrentPosition() {
    return new Promise((res, err) => {
        navigator.geolocation.getCurrentPosition(res, err, {
            timeout: 3000
        });
    });
}

function Home() {
    const [weather, setWeather] = useState([]);
    const apiKey = "b9ad03fd414263457318a5b0d361aaed";

    useEffect(() => {
        async function getWeather() {
            let geo = false;
            try {
                geo = await getCurrentPosition();
            } catch(err) {
                geo = false;
            }

            let url = geo ? 'https://api.openweathermap.org/data/2.5/weather?lat=' + geo.coords.latitude + '&lon=' + geo.coords.longitude + '&appid=' + apiKey : 'https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=' + apiKey;

            axios.get(url)
            .then((response) => {
                setWeather({
                    ...response['data'],
                    icon: "http://openweathermap.org/img/wn/" + response['data'].weather[0].icon + "@2x.png"
                });
                console.log(response['data']);
            });
        }
        getWeather();
    }, []);

    return(
        <div>
            <p>Coucou</p>
            <img src={weather.icon} alt="weather"/>
        </div>
    )
}

export default Home;