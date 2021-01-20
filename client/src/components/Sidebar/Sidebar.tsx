import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import styles from "@assets/jss/material-dashboard-react/components/sidebarStyle.js";

import {SideBarLogo} from "./SideBarLogo";
import {SideBarLinks} from "./SideBarLinks";
import {AppAssets} from "@assets/index";

const useStyles = makeStyles(styles as any);

export function Sidebar({color, logo, logoText, open, handleDrawerToggle}: any) {
    const classes = useStyles();

    return (
        <div>
            <Hidden mdUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={"left"}
                    open={open}
                    classes={{paper: classNames(classes.drawerPaper)}}
                    onClose={handleDrawerToggle}
                    ModalProps={{keepMounted: true}}
                >
                    <SideBarLogo logo={logo} logoText={logoText}/>
                    <div className={classes.sidebarWrapper}>
                        <SideBarLinks color={color}/>
                    </div>
                    <div className={classes.background} style={{backgroundImage: "url(" + AppAssets.sideBarBG + ")"}}/>
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    anchor={"left"}
                    variant="permanent"
                    open
                    classes={{paper: classNames(classes.drawerPaper)}}
                >
                    <SideBarLogo logo={logo} logoText={logoText}/>
                    <div className={classes.sidebarWrapper}>
                        <SideBarLinks color={color}/>
                    </div>
                    <div className={classes.background} style={{backgroundImage: "url(" + AppAssets.sideBarBG + ")"}}/>
                </Drawer>
            </Hidden>
        </div>
    );
}
