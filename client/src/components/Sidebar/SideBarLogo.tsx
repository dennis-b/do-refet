import React from 'react';
import classNames from "classnames";

import styles from "@assets/jss/material-dashboard-react/components/sidebarStyle.js";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles as any);

export const SideBarLogo = ({logo, logoText}: any) => {

    const classes = useStyles();

    return (
        <div className={classes.logo}>
            <a
                href="https://www.creative-tim.com?ref=mdr-sidebar"
                className={classNames(classes.logoLink)}
                target="_blank"
            >
                <div className={classes.logoImage}>
                    <img src={logo} alt="logo" className={classes.img}/>
                </div>
                {logoText}
            </a>
        </div>
    );
};