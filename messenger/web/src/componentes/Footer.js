import React, { useState } from 'react';
import './Footer.css';
import { IconButton } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import axios from '../helpers/axios';
import { useAuthState } from '../context/auth.js';

const Footer = () => {
    const [message, setMessage] = useState('');
    const { username } = useAuthState();

    const handleMessage = (e) => {
        e.preventDefault();
        if(!message) return false;
        let newMessage = {
            message: message.trim(),
            username: username,
            timestamp: Date.now(),
        };

        axios.post('/api/message/add', newMessage);
        setMessage('');
    };

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
