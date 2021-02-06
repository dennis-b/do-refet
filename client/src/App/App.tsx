import React from 'react';
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { RecoilRoot } from "recoil";
import DateFnsUtils from "@date-io/date-fns";
import { RestfulProvider } from "restful-react";

import { StyledAppRoot } from '@components/Layoat';
import { NavigationListener } from "@components/Navigation/NavigationListener";
import { appRoutes } from "./appRoutes";

import './App.css';
import { Theme } from "@assets/style";
import { AppNotify, setNotify } from "@components/Notify";
import { getRequestOptions } from "@utils/authUtils";


const hist = createBrowserHistory();

export function App() {
    return (
        <Router history={hist}>
            <RecoilRoot>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <RestfulProvider
                        base="http://localhost:59678/api/"
                        requestOptions={getRequestOptions}
                    >
                        <Theme>
                            <StyledAppRoot>
                                <NavigationListener />
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
                            <AppNotify ref={setNotify} />
                        </Theme>
                    </RestfulProvider>
                </MuiPickersUtilsProvider>
            </RecoilRoot>
        </Router>
    );
}

