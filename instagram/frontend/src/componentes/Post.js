import React from 'react';
import './Post.css';
import { Avatar, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import { blueGrey } from '@mui/material/colors';

import { chatAt } from '../util/chatAt.js';
import Like from './Like';

const Post = ({ post }) => {
    const { _id, name, username, imageUrl, body } = post;
    let firstStr = chatAt(name);
    let countLikes = post.likes.length;
    
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

            <p className="post__like">{countLikes} Me gusta</p>

            {
                body && <p className="post__comment"><span>{username}</span>{ body }</p> 
                
            }


            {/* Comentarios */}
            {/* Fecha del post */}
            {/* Input Post */}

        </div>
    )
}

export default Post;