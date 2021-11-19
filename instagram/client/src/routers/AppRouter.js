import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Instagram from '../pages/Instagram';
import NotFoundPage from '../pages/NotFoundPage';
import Perfil from '../pages/Perfil';
import Register from '../pages/Register';

const AppRouter = () => {

    return (
        <Switch>
            <Route exact path="/" component={Instagram} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/:username" component={Perfil} />
            <Route exact path="*" component={NotFoundPage} />
        </Switch>
    )
};

export default AppRouter;