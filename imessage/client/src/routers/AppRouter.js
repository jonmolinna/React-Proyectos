import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Imessage from '../pages/Imessage';
import Register from '../pages/Register';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Imessage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="*" component={NotFoundPage} />
        </Switch>
    )
}

export default AppRouter
