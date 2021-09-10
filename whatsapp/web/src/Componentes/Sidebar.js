import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import axios from '../helpers/axios';
import Pusher from 'pusher-js';

/// PUSHER
const pusher = new Pusher('33bd7f1aa81d481acfaf', {
    cluster: 'us2'
});

const Sidebar = () => {
    const [chats, setChats] = useState([]);

    chats.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));

    const getLastChatGrupo = () => {
        axios.get('/getLastMessageGroups')
            .then(res => {
                setChats(res.data)
            })
    };

    useEffect(() => {
        getLastChatGrupo();

        const channel = pusher.subscribe('messages');
        channel.bind('newMessage', function(data){
            getLastChatGrupo();
        });

    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars3.githubusercontent.com/u/54208914?s=460&amp;u=425aa8d5d2421828268f07206f9299d83ec20149&amp;v=4" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Buscar un chat o inicia uno nuevo" />
                </div>
            </div>

            <div className="sidebar__chats">
                {
                    chats.map(chat => (
                        <SidebarChat key={chat.id} chat={chat} />
                    ))
                }
            </div>

        </div>
    )


};

export default Sidebar;