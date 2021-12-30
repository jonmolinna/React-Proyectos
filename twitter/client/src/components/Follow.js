import React from 'react';
import './Follow.css';
import { Avatar, Button } from '@mui/material';

const Follow = () => {
    return (
        <div className='follow'>
            <article className='follow_card'>
                <h2>Who to follow</h2>
                <div className='follow_user'>
                    <Avatar />
                    <aside className='follow_username'>
                        <h4>El pollo farsante</h4>
                        <p>@Elpollofarsante</p>
                    </aside>
                    <Button>Follow</Button>
                </div>
                <div className='follow_user'>
                    <Avatar />
                    <aside className='follow_username'>
                        <h4>El pollo farsante</h4>
                        <p>@Elpollofarsante</p>
                    </aside>
                    <Button>Follow</Button>
                </div>
                <div className='follow_user'>
                    <Avatar />
                    <aside className='follow_username'>
                        <h4>Kendra jane elizabeth flores de la puente</h4>
                        <p>@Elpollofarsante</p>
                    </aside>
                    <Button>Follow</Button>
                </div>
            </article>
        </div>
    )
}

export default Follow;