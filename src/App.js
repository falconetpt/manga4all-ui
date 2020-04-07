import React from 'react';
import './App.css';
import MangaReader from "./ui/reader/MangaReader";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PrimarySearchAppBar from "./ui/navigation/PrimarySearchAppBar";
import Panel from "./ui/panel/Panel";
import LatestPanel from "./ui/panel/LatestPanel";

function App() {
    const routes = [
        {
            path: "/reader",
            component: MangaReader
        },
        {
            path: "/latest",
            component: Panel
        }
    ];

    return (
        <div>
            <PrimarySearchAppBar/>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/latest">Latest</Link>
                        </li>
                        <li>
                            <Link to="/reader">Reader</Link>
                        </li>
                    </ul>

                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </div>
            </Router>
        </div>
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

export default App;
