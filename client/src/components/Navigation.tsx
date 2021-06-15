import React from 'react';
import {NavLink} from 'react-router-dom';
import {createStyles, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";

import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const Navigation = () => {

    const classes = useStyles()

    return (
        <List component="nav" className={classes.appMenu} disablePadding>
            <NavLink to="/" className={classes.link}>
                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <IconDashboard/>
                    </ListItemIcon>
                    <ListItemText primary="Home" className={classes.listItemText}/>
                </ListItem>
            </NavLink>

            <NavLink to="/contact" className={classes.link}>
                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <ContactPhoneIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Contact" className={classes.listItemText}/>
                </ListItem>
            </NavLink>

            <NavLink to="/template" className={classes.link}>
                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <IconShoppingCart/>
                    </ListItemIcon>
                    <ListItemText primary="Templates" className={classes.listItemText}/>
                </ListItem>
            </NavLink>
        </List>
    );
};

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
    createStyles({
        appMenu: {
            width: '100%',
        },
        navList: {
            width: drawerWidth,
        },
        link: {
            textDecoration: 'none',
        },
        listItemText: {
            color: '#ffffff'
        },
        menuItem: {
            width: drawerWidth,
        },
        menuItemIcon: {
            color: '#97c05c',
        },
    })
)
export default Navigation;
