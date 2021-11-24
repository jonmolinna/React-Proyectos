import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="*" component={NotFoundPage} />
        </Switch>
    )
};

export default AppRouter;