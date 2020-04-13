import React, {Fragment, useState} from "react";
import clsx from "clsx";
import {Link} from "react-router-dom";

import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "./Search";

const drawerWidth = 240;


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar,
    aboveDrawer: {
        zIndex: theme.zIndex.drawer + 1
    }
});

const MyToolbar = withStyles(styles)(({ classes, title, onMenuClick }) => (
    <Fragment>
        <AppBar className={classes.aboveDrawer}>
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    onClick={onMenuClick}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.flex}>
                    {title}
                </Typography>
                <Search></Search>
            </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin} />
    </Fragment>
));


function search(value) {

}

const MyDrawer = withStyles(styles)(
    ({ classes, variant, open, onClose, onItemClick }) => (
        <Drawer
            variant={variant}
            open={open}
            onClose={onClose}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div
                className={clsx({
                    [classes.toolbarMargin]: variant === "persistent"
                })}
            />
            <List>
                <ListItem
                    button
                    component={Link}
                    to="/"
                    onClick={onItemClick("Home")}
                >
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/popular"
                    onClick={onItemClick("Popular")}
                >
                    <ListItemText>Popular</ListItemText>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/latest"
                    onClick={onItemClick("Latest")}
                >
                    <ListItemText>Latest</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    )
);

function AppBarInteraction({ classes, variant }) {
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState("Home");

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    const onItemClick = title => () => {
        setTitle(title);
        setDrawer(variant === "temporary" ? false : drawer);
        setDrawer(!drawer);
    };

    return (
        <div className={classes.root}>
            <MyToolbar onMenuClick={toggleDrawer} />
            <MyDrawer
                open={drawer}
                onClose={toggleDrawer}
                onItemClick={onItemClick}
                variant={variant}
            />
        </div>
    );
}

export default withStyles(styles)(AppBarInteraction);
