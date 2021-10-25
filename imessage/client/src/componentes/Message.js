import React from 'react';
import './Message.css';
import { Avatar } from '@mui/material';

const Message = () => {
    return (
        <div className="message message__sender">
            <Avatar 
                className="message__photo"
                src="https://avatars.githubusercontent.com/u/54208914?v=4" 
            />
            <p>Messages</p>
            <small>fecha</small>
        </div>
    )
}

export default Message;