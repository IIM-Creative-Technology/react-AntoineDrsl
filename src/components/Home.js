import '../Sass/components/_home.scss';
import React from "react";
import Weather from './home/Weather';
import About from './home/About';

function Home() {
    return(
        <div className="landingPage">
            <About/>
            <Weather/>
        </div>
    )
}

export default Home;