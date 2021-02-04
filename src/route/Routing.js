import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';

function Routing() {
    return(
        <Router>
            <Header/>
            <main className="App-body">
                <Switch>
                    <Route path="/">

                    </Route>
                    <Route path="/quizz">

                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default Routing;