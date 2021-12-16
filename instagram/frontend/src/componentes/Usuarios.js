import React from 'react';
import './Usuarios.css';
import { Avatar } from '@mui/material';

const Usuarios = () => {
    return (
        <div className='usuarios'>
            <p>Sugerencias para ti</p>
            <div className='usuarios__list'>
                <div className='usuarios__user'>
                    <Avatar sx={{ width: 35, height: 35 }} >N</Avatar>
                    <aside className='usuarios__details'>
                        <p>name del usuario</p>
                        <small>Nuevo en Instagram</small>
                    </aside>
                </div>
                <div className='usuarios__user'>
                    <Avatar sx={{ width: 35, height: 35 }} />
                    <aside className='usuarios__details'>
                        <p>name del usuario</p>
                        <small>Nuevo en Instagram</small>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Usuarios;
