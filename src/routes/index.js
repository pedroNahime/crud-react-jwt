import React, {Fragment} from 'react'
import {Router, Switch, Route} from "react-router-dom";
import {history} from '../helpers/history'
import PrivateRoute from '../components/PrivateRoute'
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


import Main from '../pages/Main'

const Routes = () => (
    <Router history={history}>
        <Fragment>
            <Switch>
                <PrivateRoute exact path="/" component={Main} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
            </Switch>
        </Fragment>
    </Router>
);

export default Routes