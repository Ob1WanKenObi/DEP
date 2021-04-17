import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../HomePage/index';
import GeneralAdmin from '../GeneralAdmin/index';
import ExcelUpload from '../SheetEntry/index';

const timeLine = ['January', 'February', 'March', 'April', 'May'];

const dataset =    [13311, 16344, 12334, 19443, 15224];

const RouteHandler = () => {
    return (
        <Switch>
            <Route path="/general-administration" exact component={GeneralAdmin} />
            <Route path="/" exact component={Homepage} />
            <Route path="/upload-sheet" component={ExcelUpload} />
            <Route path="/*" render={() => <h1>Page Not Found</h1>} />
        </Switch>
    );
}

export default RouteHandler;
