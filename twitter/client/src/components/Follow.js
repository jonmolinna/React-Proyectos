import React, { useState, useEffect } from 'react';
import './Follow.css';
import { Avatar, Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

import axios from '../util/axios';
import { Capitalize } from '../util/capitalize';
import { chatAt } from '../util/chatAt';

const Follow = () => {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('tokenTwitterclone');

    useEffect(() => {
        const getUsers = async () => {
            try {
                let options = {
                    method: "GET",
                    headers: {
                        "Content-type" : "application/json; charset=utf-8",
                        "authorization": `${token? token : null}`,
                    },
                };
                const res = await axios('/user', options);
                setUsers(res.data.users)
            } catch (err) {
                console.log('err', err.response);
            }
        };
        getUsers();
    }, [token]);

    return (
        <div className='follow'>
            <article className='follow_card'>
                <h2>Who to follow</h2>
                {
                    users && users.map(user => (
                        <div className='follow_user' key={user.uuid}>
                            <Avatar 
                                sx={{ bgcolor: blueGrey[700] }}
                            >
                                {chatAt(user.name)}
                            </Avatar>
                            <aside className='follow_username'>
                                <h4>{Capitalize(user.name)}</h4>
                                <p>@{user.username}</p>
                            </aside>
                            <Button>Follow</Button>
                        </div>
                    ))
                }
            </article>
        </div>
    )
}

export default Follow;