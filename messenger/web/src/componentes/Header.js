import React from 'react';
import './Header.css';
import {IconButton, Avatar} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';

const Header = ({ handleLogout }) => {

    return (
        <div className="header">
            <IconButton onClick={handleLogout}>
                <ArrowBackIosIcon />
            </IconButton>
            <div className="header__center">
                <Avatar src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1629217800/whatsapp-project/img_3_i6viti.jpg" />
                <h3>Linux</h3>
            </div>
            <IconButton>
                <CallIcon />
            </IconButton>
            <IconButton>
                <VideocamIcon />
            </IconButton>
        </div>
    )
}

export default Header;
