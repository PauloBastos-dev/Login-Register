import React from 'react'

import { Router, Switch, Route } from 'react-router'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import Page1 from '../pages/pages1'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/register"/>
            <Route component={Home} exact path="/"/>
            <PrivateRoute component={Page1} exact path="/page1"/>
            <PrivateRoute component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes
