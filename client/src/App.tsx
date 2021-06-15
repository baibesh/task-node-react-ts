import React from 'react';
import clsx from 'clsx';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import {Container, CssBaseline, Drawer, makeStyles} from "@material-ui/core";
import TemplatePage from "./pages/TemplatePage";

const App = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className={clsx('App', classes.root)}>
                <CssBaseline/>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Navigation/>
                </Drawer>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route path="/template" component={TemplatePage}/>
                        </Switch>
                    </Container>
                </main>
            </div>
        </BrowserRouter>
    );
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: '#535454',
        color: '#fff',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default App;
