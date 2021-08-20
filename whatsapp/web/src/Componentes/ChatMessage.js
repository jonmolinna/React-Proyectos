import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message, user }) => {
    let isUser = user === message.name;
    let numero = Number(message.timestamp);
    let fecha = new Date(numero).toLocaleDateString();
    let hora = new Date(numero).toLocaleTimeString();

    return (
        <p className={`chat__message ${isUser && 'chat__reciever '}`}>
            <span className="chat__name">{message.name}</span>
                {message.message}
            <span className="chat__timestamp">{fecha} {hora}</span>
        </p>
    )
};

export default ChatMessage;