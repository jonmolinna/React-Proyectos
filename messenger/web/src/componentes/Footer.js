import React, { useState } from 'react';
import './Footer.css';
import { IconButton } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Footer = ({ username, addMessage }) => {
    const [message, setMessage] = useState('');

    const handleMessage = (e) => {
        e.preventDefault();
        let newMessage = {
            message: message,
            username: username,
            timestamp: Date.now(),
        };
        addMessage(newMessage);
        setMessage('');
    }

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
            <form className="footer__form" onSubmit={handleMessage}>
                <input 
                    type="text" 
                    placeholder="Escribe un Mensaje"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            <IconButton>
                <ThumbUpIcon />
            </IconButton>
        </div>
    )
}

export default Footer;
