import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Nomatch from './Nomatch';

function Routing() {
    return(
        <Router>
            <Header/>
            <main className="App-body">
                <Switch>
                    <Route exact path="/">

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