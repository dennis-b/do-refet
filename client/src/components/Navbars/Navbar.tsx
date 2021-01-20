import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import styles from "@assets/jss/material-dashboard-react/components/headerStyle.js";

const useStyles = makeStyles(styles as any);

export function Navbar({handleDrawerToggle}: any) {
    const classes = useStyles();

    function makeBrand() {
        return 'make brand'
    }

    const appBarClasses = classNames({[" " + classes['primary']]: 'primary'});

    return (
        <AppBar className={classes.appBar + appBarClasses}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    <Button
                        color="secondary"
                        href="#"
                        className={classes.title}>
                        {makeBrand()}
                    </Button>
                </div>
                <Hidden
                    smDown
                    implementation="css"
                >
                    AdminNavbarLinks
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}
