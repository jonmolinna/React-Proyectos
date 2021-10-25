import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import SidebarChat from './SidebarChat';

import { useAuthDispatch } from '../context/auth';

// PUSHER

const Sidebar = () => {
    const dispatch = useAuthDispatch();

    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    };

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar 
                    className="sidebar__avatar"
                    src="https://avatars.githubusercontent.com/u/54208914?v=4"
                    onClick={logout}
                />
                <div className="sidebar__input">
                    <SearchIcon />
                    <input type="text" placeholder="Buscar" />
                </div>
                <IconButton variant="outlined" className="sidebar__inputButton">
                    <RateReviewOutlinedIcon />
                </IconButton>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;