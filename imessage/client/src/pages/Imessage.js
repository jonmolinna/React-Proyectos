import React from 'react';

import { useAuthState } from '../context/auth';
import Home from './Home';
import Login from './Login';

const Imessage = () => {
    const { usuario } = useAuthState();

    return (
        <div>
            {
                usuario? <Home /> : <Login />
            }
        </div>
    )
}

export default Imessage;