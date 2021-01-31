import React from 'react';
import classNames from "classnames";

import styles from "@assets/jss/material-dashboard-react/components/sidebarStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import { AppAssets } from "@assets/index";

const useStyles = makeStyles(styles as any);

export const SideBarLogo = ({ logo, logoText }: any) => {

    const classes = useStyles();

    return (
        <div className={classes.logo}>
            <div className={classNames(classes.logoLink)}>
                <div className={classes.logoImage}>
                    <img src={AppAssets.Images.logo} alt="logo" className={classes.img} />
                </div>
                {logoText}
            </div>
        </div>
    );
};
