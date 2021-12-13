import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../componentes/Header';
import Post from '../componentes/Post';

import axios from '../util/axios';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await axios.get('/posts');
                setPosts(data.data.posts)
            } catch (error) {
                console.log(error);
            }
        }

        getPosts();
    }, []);

    console.log(posts);

    return (
        <div className="home">
            <Header />
            <div className="home__content">
                <div className="home__left">
                    {
                       posts && posts.map(post => (
                           <Post key={post._id} post={post} />
                       )) 
                    }
                </div>
                <div className="home__right">
                    Usuario
                </div>
            </div>
        </div>
    )
}

export default Home;
