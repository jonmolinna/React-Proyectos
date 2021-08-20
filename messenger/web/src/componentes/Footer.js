import React from 'react';
import './Footer.css';
import { IconButton } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Footer = () => {
    return (
        <div className="footer">
            <IconButton>
                <CameraAltIcon />
            </IconButton>
            <IconButton>
                <MicIcon />
            </IconButton>
            <IconButton>
                <EmojiEmotionsIcon />
            </IconButton>
            <form className="footer__form">
                <input type="text" placeholder="Escribe un Mensaje" />
                <button type="submit">Enviar</button>
            </form>
            <IconButton>
                <ThumbUpIcon />
            </IconButton>
        </div>
    )
}

export default Footer;
