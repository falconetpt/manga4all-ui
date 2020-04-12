import React from 'react';
import './App.css';
import {
    Switch,
    Route,
    Link, withRouter
} from "react-router-dom";
import PrimarySearchAppBar from "./ui/navigation/PrimarySearchAppBar";
import LatestPanel from "./ui/panel/LatestPanel";
import PopularPanel from "./ui/panel/PopularPanel";
import RoutePropsContext from "./utils/context/RoutePropsContext";
import Chapter from "./ui/chapter/Chapter";
import Reader from "./ui/reader/MangaReader";
import SearchPanel from "./ui/panel/SearchPanel";

function App(props) {
    const routeProps = {
        match: props.match,
        location: props.location,
        history: props.history,
        state: {}
    };

    const routes = [
        {
            path: "/reader",
            component: Reader
        },
        {
            path: "/latest",
            component: LatestPanel
        },
        {
            path: "/popular",
            component: PopularPanel
        },
        {
            path: "/chapter",
            component: Chapter
        }
    ];

    return (
        <RoutePropsContext.Provider value={routeProps}>
            <div>
                <PrimarySearchAppBar/>

                <Switch>
                    <Route path="/" exact component={PopularPanel}/>
                    <Route path='/search/:keyword' exact render= {routeProps =>
                        <SearchPanel {...routeProps} key={document.location.href} />} />
                </Switch>

                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </RoutePropsContext.Provider>
    );
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export default withRouter(App);
