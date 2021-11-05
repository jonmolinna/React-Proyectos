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
            <div className="home__movil">
                {
                    chatUser? <Chat /> : <Sidebar />
                }
            </div>
            <div className="home__desktop">
                <Sidebar />
                {
                    chatUser? <Chat /> : <Inicio />
                }
            </div>
        </div>
    )
}

export default Home
