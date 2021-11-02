import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import SidebarChat from './SidebarChat';

import { useAuthDispatch, useAuthState } from '../context/auth';
import axios from '../util/axios';

// PUSHER

const Sidebar = () => {
    const dispatch = useAuthDispatch();
    const { usuario } = useAuthState();
    const [users, setUsers] = useState(null);

    const token = localStorage.getItem('tokenImessage');
    
    

    useEffect(() => {
        const getUsers = async () => {
            try {
                let options = {
                    headers: {
                        'Authorization': `Bearer ${token? token : null}`
                    }
                }
    
                const data = await axios.get('/getUsers', options);
                setUsers(data.data.usuariosMessage);
            } catch (error) {
                console.log(error.response);
            }
        };

        getUsers();
    }, [token]);

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
                    src={usuario.imagen}
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
                {
                    users && users.map(user => (
                        <SidebarChat key={user._id} user={user} />
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;