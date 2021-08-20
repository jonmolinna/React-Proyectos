import React from 'react';
import './ChatMessage.css';

const ChatMessage = () => {
    return (
        <p className="chat__message chat__reciever">
            <span className="chat__name">Jon Dallas</span>
            Este es mi Mensaje
            <span className="chat__timestamp">12/11/2021</span>
        </p>
    )
}

export default ChatMessage;