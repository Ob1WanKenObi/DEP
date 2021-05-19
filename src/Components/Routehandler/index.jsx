import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../HomePage/index';
import GeneralAdmin from '../GeneralAdmin/index';
import ExcelUpload from '../SheetEntryGeneralAdmin/index';
import LogIn from '../LogIn/Login';
import SignUp from '../SignUp/SignUp';
import CovidUpload from '../SheetEntryCovid/index';
import CoronaVirus from '../CoronaVirus/index';

const RouteHandler = () => {
    return (
        <Switch>
            <Route path="/" exact component={LogIn} />
            <Route path="/register" exact component={SignUp} />
            <Route path="/general-administration" exact component={GeneralAdmin} />
            <Route path="/covid" exact component={CoronaVirus} />
            <Route path="/homepage" exact component={Homepage} />
            <Route path="/upload-sheet" component={ExcelUpload} />
            <Route path="/upload-sheet-covid" component={CovidUpload} />
            <Route path="/*" render={() => <h1>Page Not Found</h1>} />
        </Switch>
    );
}

export default RouteHandler;
