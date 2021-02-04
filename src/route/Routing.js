import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nomatch from './Nomatch';
import Header from '../components/Header';
import Home from '../components/Home';

function Routing() {
    return(
        <Router>
            <Header/>
            <main className="App-body">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/quizz">

                    </Route>
                    <Route path="*">
                        <Nomatch/>
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default Routing;