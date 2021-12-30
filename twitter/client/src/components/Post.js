import React from 'react';
import './Post.css';
import { Avatar, IconButton } from '@mui/material';
import PostFooter from './PostFooter';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Post = () => {
    return (
        <div className='post'>
            <Avatar />
            <article className='post_content'>
                <aside className='post_header'>
                    <div className='post_headerLeft'>
                        <h2>Jon Dallase</h2>
                        <p>@dallase123</p>
                        <time>7h</time>
                    </div>
                    <IconButton>
                        <MoreHorizOutlinedIcon />
                    </IconButton>
                </aside>
                <aside className='post_comment'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Tenetur sed sit corrupti alias voluptas, fugiat ut facilis 
                    provident consectetur temporibus?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Tenetur sed sit corrupti alias voluptas, fugiat ut facilis 
                </aside>
                <aside className='post_imagen'>
                    <img src="https://avatars.githubusercontent.com/u/54208914?v=4" alt="post_imagen" />
                </aside>
                <aside className='post_footer'>
                    <PostFooter />
                </aside>
            </article>
        </div>
    )
}

export default Post;
