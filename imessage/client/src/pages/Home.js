import React from 'react';
import Chat from '../componentes/Chat';
import Sidebar from '../componentes/Sidebar';
import './Home.css';

const Home = () => {

    return (
        <div className="home">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Home
