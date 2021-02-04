import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from '../logo.svg';

function Routing() {
    return(
        <Router>
           
           <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header>
            </div>

            <main className="App-body">
                <Switch>
                    <Route path="/">

                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default Routing;