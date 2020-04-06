import React from 'react';
import './App.css';
import MangaReader from "./reader/MangaReader";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    const routes = [
        {
            path: "/reader",
            component: MangaReader
        }
    ];

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/reader">Sandwiches</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </Router>
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
