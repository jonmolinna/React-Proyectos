import React from 'react';
import './Header.css';
import {IconButton, Avatar} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <ArrowBackIosIcon />
            </IconButton>
            <div className="header__center">
                <Avatar src="https://avatars.githubusercontent.com/u/54208914?v=4" />
                <h3>Jon Dallas</h3>
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

export default Header
