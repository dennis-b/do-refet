import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import { HomePage } from "@pages/Home";

const hist = createBrowserHistory();

export function App() {
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Redirect from="/" to="/home" />
            </Switch>
        </Router>
    );
}

