import React from 'react';
import './Message.css';
import moment from 'moment';

import { useAuthState } from '../context/auth';

const Message = ({ messages }) => {
    const { usuario } = useAuthState();
    let isUser = messages.from === usuario.username

    return (
        <p className={`message ${isUser? 'chatMessage__reciever': ''}`}>
            { messages.message }
            <span className="message__timestamp">
                {moment(messages.createdAt).format('LLL')}
            </span >
        </p>
    )
}

export default Message;