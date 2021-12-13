import React from 'react';
import './Post.css';
import { Avatar, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';

const Post = ({ post }) => {
    const { username, imageUrl, body } = post;
    
    return (
        <div className="post">
            <div className="post__header">
                <aside className="post__avatar">
                    <Avatar />
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
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
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

            <p className="post__like">0 Me gusta</p>

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