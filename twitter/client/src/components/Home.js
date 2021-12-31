import React from 'react';
import './Home.css';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Avatar } from '@mui/material';
import Post from './Post';
import PostInput from './PostInput';
import { blueGrey } from '@mui/material/colors';

import { useAuthState } from '../context/auth';
import { chatAt } from '../util/chatAt';

const Home = () => {
    const { user } = useAuthState();

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
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </aside>
            </article>
        </div>
    )
}

export default Home;