import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

    return (
        <AppBar className={classes.appBar + ' primary'}>
            <Toolbar>
                <div className={classes.flex}>
                    <Button
                        color="secondary"
                        href="#"
                        className={classes.title}
                    >
                        {makeBrand()}
                    </Button>
                </div>
                <Hidden
                    smDown
                    implementation="css"
                >
                    Links
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}
