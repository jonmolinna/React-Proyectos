import React from 'react';
import Header from '../componentes/Header';
import Post from '../componentes/Post';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="home__content container">
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
        </div>
    )
}

export default Home;
