import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
        </Switch>
    )
}

export default AppRouter
