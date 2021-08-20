import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

const Sidebar = ({ grupos, mensage }) => {
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
                    grupos.map(grupo => (
                        <SidebarChat key={grupo._id} grupo={grupo} mensage={mensage} />
                    ))
                }
            </div>

        </div>
    )


};

export default Sidebar;