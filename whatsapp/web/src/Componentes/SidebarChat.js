import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import Pusher from 'pusher-js'

import axios from '../helpers/axios';
import { useAuthDispatch } from '../reducers/userReducer';
import { TYPES } from '../reducers/actions/userActions';

/// >>>> PUSHER
const pusher = new Pusher('33bd7f1aa81d481acfaf', {
    cluster: 'us2'
});

const SidebarChat = ({ chat }) => {
    let { id, image, name } = chat;
    const [chatInfo, setChatInfo] = useState('');
    const dispatch = useAuthDispatch();

    const handleMessageId = () => {
        dispatch({
            type: TYPES.GROUP_CHAT,
            payload: id
        })
    };
    
    useEffect(() => {
        axios.get(`/getLastMessageGroup?id=${id}`)
            .then(res => {
                setChatInfo(res.data)
        });

        const channel = pusher.subscribe('messages');
        channel.bind('newMessage', function(data){
            axios.get(`/getLastMessageGroup?id=${id}`)
            .then(res => {
                setChatInfo(res.data)
            });
        })

    }, [id]);

    return (
        <div className="sidebarChat" onClick={handleMessageId}>
            <Avatar src={image} />
            <div className="sidebarChat__info">
                <h2>{ name }</h2>
                <p>{ chatInfo.message }</p>
            </div>
        </div>
    )
}

export default SidebarChat;