import React from 'react';
import './Post.css';
import { Avatar, IconButton } from '@mui/material';
import PostFooter from './PostFooter';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { blueGrey } from '@mui/material/colors';
import moment from 'moment';

import { chatAt } from '../util/chatAt';
import { Capitalize } from '../util/capitalize';

const Post = ({ post }) => {
    let fecha = moment(post.createdAt).subtract('hour').fromNow(true);

    return (
        <div className='post'>
            <Avatar sx={{ bgcolor: blueGrey[700] }} >{chatAt(post.name)}</Avatar>
            <article className='post_content'>  
                <aside className='post_header'>
                    <div className='post_headerLeft'>
                        <h2>{Capitalize(post.name)}</h2>
                        <p>@{post.username}</p>
                        <time>{fecha}</time>
                    </div>
                    <IconButton>
                        <MoreHorizOutlinedIcon />
                    </IconButton>
                </aside>
                {
                    post.comment && (
                        <aside className='post_comment'>
                            {
                                post.comment
                            }
                        </aside>
                    )
                }
                {
                    post.imagen && (
                        <aside className='post_imagen'>
                            <img src={post.imagen} alt="post_imagen" />
                        </aside>
                    )
                }
                <aside className='post_footer'>
                    <PostFooter post={post} />
                </aside>
            </article>
        </div>
    )
}

export default Post;
