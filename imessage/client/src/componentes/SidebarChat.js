import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
import moment from 'moment';

import Capitalize from '../util/capitalize'
import { useAuthDispatch, useAuthState } from '../context/auth';

// Pusher

const SidebarChat = ({ user }) => {
    let nombre = Capitalize(user.name);
    const dispatch = useAuthDispatch();
    const { chatUser } = useAuthState();

    const sendUsername = () => {
        dispatch({
            type: 'SET_CHAT_USERNAME',
            payload: user
        })
    };

    const isActive = user.username === chatUser?.username;

    return (
        <div className={`sidebarChat ${isActive && 'sidebarChat__active'}`} onClick={sendUsername}>
            <Avatar src={ user.imgURL } />
            <div className="sidebarChat__info">
                <h3>{ nombre }</h3>
                <p>
                    {
                        user.latestMessage? `${user.latestMessage.message}` : 'Haz clic para conversar'
                    }
                </p>
                <small>
                    {
                       user.latestMessage? `${moment(user.latestMessage.createdAt).format('LL')}` : `${moment(user.createdAt).format('LL')}`
                    }
                </small>
            </div>
        </div>
    )
}

export default SidebarChat;