import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../HomePage/index';
import CovidPage from '../CovidPage/index';


const RouteHandler = () => {
    return (
        <Switch>
            <Route path="/general-administration" exact component={CovidPage} />
            <Route path="/" exact component={Homepage} />
            <Route path="/*" render={() => <h1>Page Not Found</h1>} />
        </Switch>
    );
}

export default RouteHandler;
