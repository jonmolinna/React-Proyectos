import React, { useState, useEffect } from 'react';
import './Usuarios.css';
import { Avatar } from '@mui/material';

import axios from '../util/axios.js';
import { chatAt } from '../util/chatAt.js';
import { Capitalize } from '../util/capitalize.js';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    console.log('USUARIOS')

    const getUsers = async () => {
        try {
            let users = await axios.get('/getUsers');
            setUsuarios(users.data.users);
        } catch (error) {
            console.log(error.response)
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='usuarios'>
            <p>Usuarios nuevos:</p>
            <div className='usuarios__list'>
                {
                    usuarios && usuarios.map(user => (
                        <div className='usuarios__user' key={user._id}>
                            <Avatar sx={{ width: 35, height: 35 }} >{chatAt(user.name)}</Avatar>
                            <aside className='usuarios__details'>
                                <p>{ Capitalize(user.name) }</p>
                                <small>{ user.username }</small>
                            </aside>
                        </div>
                        )   
                    )
                }
            </div>
        </div>
    )
}

export default Usuarios;
