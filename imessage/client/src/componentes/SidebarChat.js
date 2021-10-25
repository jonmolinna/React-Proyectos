import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';

// Pusher

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar src="https://avatars.githubusercontent.com/u/54208914?v=4" />
            <div className="sidebarChat__info">
                <h3>Nombre</h3>
                <p>Ultimo Message</p>
                <small>
                    fecha
                </small>
            </div>
        </div>
    )
}

export default SidebarChat;