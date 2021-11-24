import React from 'react';
import './Post.css';
import { Avatar, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';

const Post = () => {
    return (
        <div className="post">
            <div className="post__header">
                <aside className="post__avatar">
                    <Avatar src="https://avatars.githubusercontent.com/u/54208914?v=4"/>
                    <a href="index.html">username</a>
                </aside>
                <aside className="post__menu">
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </aside>
            </div>

            <div className="post__image">
                <img 
                    src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1633005084/whatsapp-project/Leon_cnipqa.png" 
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

            <p><span>Username</span>Esto es una descripcion del post</p>

            {/* Comentarios */}
            {/* Fecha del post */}
            {/* Input Post */}

        </div>
    )
}

export default Post;