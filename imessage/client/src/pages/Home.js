import React from 'react';
import Chat from '../componentes/Chat';
import Sidebar from '../componentes/Sidebar';
import './Home.css';

import { useAuthState } from '../context/auth.js'
import Inicio from '../componentes/Inicio';

const Home = () => {
    const { chatUser } = useAuthState();

    return (
        <div className="home">
            <Sidebar />
            {
                chatUser? <Chat /> : <Inicio />
            }
        </div>
    )
}

export default Home
