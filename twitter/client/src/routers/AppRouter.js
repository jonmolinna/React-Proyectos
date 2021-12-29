import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';
import Register from '../pages/Register';
import Twitter from '../pages/Twitter';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Twitter} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="*" component={NotFoundPage} />
        </Switch>
    )
}

export default AppRouter;