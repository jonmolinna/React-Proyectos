import React, { useState, useEffect } from 'react';
import './Home.css';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Avatar } from '@mui/material';
import Post from './Post';
import PostInput from './PostInput';
import { blueGrey } from '@mui/material/colors';

import { useAuthState } from '../context/auth';
import { chatAt } from '../util/chatAt';
import axios from '../util/axios';

const Home = () => {
    const { user } = useAuthState();
    const [post, setPost] = useState([]);
    const token = localStorage.getItem('tokenTwitterclone');

    useEffect(() => {
        const getPosts = async () => {
            try {
                let options = {
                    method: "GET",
                    headers: {
                        "Content-type" : "application/json; charset=utf-8",
                        "authorization": `${token? token : null}`,
                    },
                };
                const res = await axios('/post', options);
                setPost(res.data.posts)
                // console.log(res);
            } catch (err) {
                console.log('err', err.response);
            }
        };
        getPosts();
    }, [token]);

    return (
        <div className='home'>
            <article className='home_header'>
                <h2>Home</h2>
                <AutoFixHighIcon />
            </article>
            <article className='home_body'>
                <aside className='home_bodyHeader'>
                    <Avatar sx={{ bgcolor: blueGrey[700] }}>{chatAt(user.name)}</Avatar>
                    <PostInput />
                </aside>
                <aside className='home_posts'>
                    {
                        post && post.map(post => (
                            <Post key={post.uuid} post={post} />
                        ))
                    }
                </aside>
            </article>
        </div>
    )
}

export default Home;