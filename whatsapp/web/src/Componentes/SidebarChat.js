import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import axios from '../helpers/axios';
import { Link } from 'react-router-dom';
import Pusher from 'pusher-js'

/// >>>> PUSHER
const pusher = new Pusher('33bd7f1aa81d481acfaf', {
    cluster: 'us2'
});

const SidebarChat = ({ chat }) => {
    let { id, image, name } = chat;

    const [chatInfo, setChatInfo] = useState('');
    
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
        <Link to={`/group/${id}`}>
            <div className="sidebarChat">
                <Avatar src={image} />
                <div className="sidebarChat__info">
                    <h2>{ name }</h2>
                    <p>{ chatInfo.message }</p>
                </div>
            </div>
        </Link>
    )
}

export default SidebarChat;