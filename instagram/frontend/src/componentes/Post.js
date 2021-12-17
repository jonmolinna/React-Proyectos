import React from 'react';
import './Post.css';
import { Avatar, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import { blueGrey } from '@mui/material/colors';
import moment from 'moment';

import { chatAt } from '../util/chatAt.js';
import Like from './Like';
import Comments from './Comments';
import PostInput from './PostInput';
import { useAuthState } from '../context/auth.js'

const Post = ({ post }) => {
    const { user } = useAuthState();
    const { _id, name, username, imageUrl, body, likes, comments, createdAt } = post;
    let firstStr = chatAt(name);
    let fecha = moment(createdAt).fromNow();

    console.log('POST')
    
    return (
        <div className="post">
            <div className="post__header">
                <aside className="post__avatar">
                    <Avatar sx={{ bgcolor: blueGrey[300] }}>{firstStr}</Avatar>
                    <a href="index.html">{username}</a>
                </aside>
                <aside className="post__menu">
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </aside>
            </div>

            <div className="post__image">
                <img 
                    src={imageUrl}
                    alt="" 
                />
            </div>

            <div className="post__icons">
                <div className="post__iconsLeft">
                    <Like likes={post.likes} postId={_id} />
                    <IconButton>
                        <ModeCommentOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <TelegramIcon    />
                    </IconButton>
                </div>
                <div className="post__iconsRight">
                    <IconButton>
                        <TurnedInNotIcon />
                    </IconButton>
                </div>
            </div>
            {
                likes.length> 0 && <p className="post__like">{likes.length} Me gusta</p>
            }
            {
                body && <p className="post__comment"><span>{username}</span>{ body }</p> 
                
            }

            {
                comments.length> 0 && <p className='post__commentCount'>{comments.length} comentarios</p>
            }
            <div className='post__comments'>
                {
                    comments && comments.map(comment => (
                        <Comments key={comment._id} comment={comment} />
                    ))
                }
            </div>
            <time className='post__time'>{fecha}</time>
            <div className='post__input'>
                {
                    user && <PostInput postId={_id} />
                }
            </div>
        </div>
    )
}

export default Post;