function About() {
    return (
        <div className="aboutSection">
            <h1>Bienvenue sur Quizz.io</h1>
            <hr/>
            <p>
                Quizz.io est un site créé pour un projet étudiant à l'IIM. <br/>
                Réalisé en React, il a pour but d'apprendre à utiliser cette librairie Javascript et ses diverses fonctions : components, calls API, useState() et useEffect(), etc...
            </p>
            <p>
                Cette première page vous géolocalise et vous indique la météo grâce à l'API <a href="https://openweathermap.org/">OpenWeatherMap</a>. <br/>
                La page Quizz, quant à elle, vous proposera 4 quizz sur des sujets divers, auxquels vous pourrez vous amuser à répondre.
            </p>
            <p>
                En espérant que ce site vous plaira, <br/>
                Je retourne à mes props
            </p>
            <p className="pull-right"><a href="https://www.github.com/AntoineDrsl">AntoineDrsl</a></p>
        </div>
    )
}

export default About;