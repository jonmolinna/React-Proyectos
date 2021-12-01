import React from 'react';
import './Home.css';
import Header from '../componentes/Header';
import Post from '../componentes/Post';
import Footer from '../componentes/Footer';

import { useAuthState } from '../context/auth';

const Home = () => {
    const { user } = useAuthState();

    return (
        <div className="home">
            <Header />
            <div className="home__content">
                <div className="home__left">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="home__right">
                    Usuario
                </div>
            </div>
            {
                user && <Footer />
            }
        </div>
    )
}

export default Home;
