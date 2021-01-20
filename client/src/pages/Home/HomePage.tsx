import React, {useState} from 'react';
// import * as logo from "*.png";
// import * as bgImage from "*.png";
import {makeStyles} from "@material-ui/core/styles";
import styles from "@assets/jss/material-dashboard-react/layouts/adminStyle.js";
import {Sidebar} from "@components/Sidebar/Sidebar";
import {Navbar} from "@components/Navbars/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import {homeRoutes} from "@pages/Home/homeRoutes";

const useStyles = makeStyles(styles as any);

export const HomePage = () => {

    const classes = useStyles()
    const [mobileOpen, setMobileOpen] = useState(false);
    const mainPanel = React.createRef<any>();

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <div
            className={classes.wrapper}>
            <Sidebar
                logoText={"Creative Tim"}
                logo={'logo'}
                handleDrawerToggle={handleDrawerToggle}
                open={mobileOpen}
                color={'blue'}
            />
            <div
                className={classes.mainPanel}
                ref={mainPanel}
            >
                <Navbar handleDrawerToggle={handleDrawerToggle}/>
                <div className={classes.content}>
                    <div className={classes.container}>
                        <Switch>
                            {homeRoutes.map(({path, component, name}, key) => (
                                <Route
                                    path={path}
                                    component={component}
                                    key={name}
                                />
                            ))}
                            <Redirect from="/home" to="/home/dashboard"/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};
