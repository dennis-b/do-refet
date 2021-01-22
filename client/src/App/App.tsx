import React from 'react';
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { RecoilRoot } from "recoil";
import DateFnsUtils from "@date-io/date-fns";

import { StyledAppRoot } from '@components/Layoat';
import { appRoutes } from "./appRoutes";

import './App.css';
import { RestfulProvider } from "restful-react";


const hist = createBrowserHistory();

export function App() {
    return (
        <Router history={hist}>
            <RecoilRoot>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <RestfulProvider base="http://localhost:59678/">
                        <StyledAppRoot>
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
                        </StyledAppRoot>
                    </RestfulProvider>
                </MuiPickersUtilsProvider>
            </RecoilRoot>
        </Router>
    );
}

