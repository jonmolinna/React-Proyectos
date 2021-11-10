import React from 'react';
import './Header.css';
import { Avatar } from '@mui/material';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__img">
                    <img 
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                        alt="logo" 
                    />
                </div>
                <div className="header__input">
                    <input type="search" placeholder="Buscar" />
                </div>
                <div className="header__avatar">
                    <Avatar src="https://avatars.githubusercontent.com/u/54208914?v=4"/>
                </div>
            </div>
        </div>
    )
}

export default Header;