import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFoundPage from '../pages/NotFoundPage';
import Loader from '../pages/Loader';

import { useAuthState } from '../context/auth.js';

const AppRouter = () => {
    const { user } = useAuthState();

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route 
                exact 
                path="/login" 
                render={() => (
                    user? (<Redirect to="/" />) : (<Login />)
                )} 
            />
            <Route 
                exact 
                path="/register" 
                render={() => (
                    user? <Redirect to="/" /> : <Register />
                )}
            />
            <Route 
                exact 
                path="/loader" 
                render={() => (
                    user? <Loader /> : <Redirect to="/" />
                )}
            />
            <Route exact path="*" component={NotFoundPage} />
        </Switch>
    )
};

export default AppRouter;