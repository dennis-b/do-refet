import React from 'react';
import {createBrowserHistory} from "history";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {appRoutes} from "./appRoutes";
import {StyledAppRoot} from '@components/Layoat';

import './App.css';
import {RecoilRoot} from "recoil";

const hist = createBrowserHistory();

export function App() {
    return (
        <Router history={hist}>
            <RecoilRoot>
                <StyledAppRoot>
                    <Switch>
                        {appRoutes.map(({path, component, name}, key) => (
                            <Route
                                path={path}
                                component={component}
                                key={name}
                            />
                        ))}
                        <Redirect from="/" to="/home"/>
                    </Switch>
                </StyledAppRoot>
            </RecoilRoot>
        </Router>
    );
}

