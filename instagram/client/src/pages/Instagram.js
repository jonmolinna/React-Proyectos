import React from 'react';
import Login from './Login';
import Home from './Home';

import { useAuthState } from '../context/auth';

const Instagram = () => {
    const { user } = useAuthState();

    return (
        <>
        {
            user? <Home /> : <Login />
        }            
        </>
    )
}

export default Instagram;
