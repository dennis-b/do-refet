import React from 'react';
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { appRoutes } from "./AppRoutes";

import './App.css';

const hist = createBrowserHistory();

export function App() {
    return (
        <Router history={hist}>
            <Switch>
                {appRoutes.map(({ path, component, name }, key) => (
                    <Route
                        path={path}
                        component={component}
                        key={name}
                    />
                ))}
                <Redirect from="/" to="/home" />
            </Switch>
        </Router>
    );
}

