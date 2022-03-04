import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../components/Header';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    // const location = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:9000/api/posts" + search);
            setPosts(res.data);
        };

        fetchPosts();

    }, [search]);

    return (
        <>
            <Header />
            <div className='home'>
                {
                    posts && <Posts posts={posts} />
                }
                <Sidebar />
            </div>
        </>
    )
};

export default Home;