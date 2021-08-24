import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message, username }) => {
    let isUsername = username === message.username;
    let segundos = Number(message.timestamp);
    let fecha = new Date(segundos).toLocaleDateString();
    let hora = new Date(segundos).toLocaleTimeString();

    return (
        <p className={`chat__message ${isUsername && 'chat__reciever' }`}>
            <span className="chat__name">{isUsername? '' : message.username}</span>
            {message.message}
            <span className="chat__timestamp">{fecha} {hora}</span>
        </p>
    )
};

export default ChatMessage;