import React from 'react';
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { activeRoute } from "@utils/navigationUtils";
import { homeRoutes } from "@pages/Home/homeRoutes";
import styles from "@assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles as any);

export const SideBarLinks = ({ color }: any) => {

    const classes = useStyles();
    const routes = homeRoutes.filter(({ displayOnSideBar }) => displayOnSideBar)

    return (
        <List className={classes.list}>
            {
                routes.map(({ name, path, icon: LinkIcon }, key) => {
                    let activePro = " ";
                    let listItemClasses = classNames({ [" " + classes[color]]: activeRoute(path) })
                    const whiteFontClasses = classNames({ [" " + classes.whiteFont]: activeRoute(path) });
                    return (
                        <NavLink
                            to={path}
                            className={activePro + classes.item}
                            activeClassName="active"
                            key={key}
                        >
                            <ListItem button className={classes.itemLink + listItemClasses}>
                                <LinkIcon className={classNames(classes.itemIcon, whiteFontClasses)} />
                                <ListItemText
                                    primary={name}
                                    className={classNames(classes.itemText, whiteFontClasses)}
                                    disableTypography={true}
                                />
                            </ListItem>
                        </NavLink>
                    );
                })
            }
        </List>
    );
};
