import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';
import Register from '../pages/Register';
import Twitter from '../pages/Twitter';

import { useAuthState } from '../context/auth';

const AppRouter = () => {
    const { user } = useAuthState();

    return (
        <Switch>
            <Route 
                exact 
                path="/" 
                render={() => (
                    user? <Twitter /> : <Redirect to='/login' />
                )}
            />
            <Route 
                exact 
                path="/login"
                render={() => (
                    user? <Redirect to='/' /> : <Login />
                )}
            />
            <Route 
                exact
                path="/register"
                render={() => (
                    user? <Redirect to='/' /> : <Register />
                )}
            />
            <Route exact path="*" component={NotFoundPage} />
        </Switch>
    )
}

export default AppRouter;