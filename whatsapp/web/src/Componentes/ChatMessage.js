import React from 'react';
import './ChatMessage.css';
import moment from 'moment';

import { Capitalize } from '../helpers/capitalize';

const ChatMessage = ({ message, userName }) => {
    let isUser = message.user.toLowerCase() === userName.toLowerCase();
    let fecha = moment(parseInt(message.timestamp)).fromNow(true);

    return (
        <p className={`chat__message ${isUser && 'chat__reciever '}`}>
            <span className="chat__name">{ Capitalize(message.user) }</span>
                {message.message}
            <span className="chat__timestamp">{fecha}</span>
        </p>
    )
};

export default ChatMessage;