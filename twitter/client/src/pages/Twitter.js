import React from 'react';
import './Twitter.css';
import Follow from '../components/Follow';
import Home from '../components/Home';
import Sidebar from '../components/Sidebar';

const Twitter = () => {
    return (
        <div className='twitter'>
            <article className='twitter_left'>
                <Sidebar />
            </article>
            <article className='twitter_center'>
                <Home />
            </article>
            <article className='twitter_right'>
                <Follow />
            </article>
        </div>
    )
};

export default Twitter;