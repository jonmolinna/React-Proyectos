import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';

import { useAuthDispatch, useAuthState } from '../context/auth';
import { chatAt } from '../util/chatAt.js';

const AvatarHeader = () => {
    const dispatch = useAuthDispatch();
    const { user } = useAuthState();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const firstChar = chatAt(user.name);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        });
    };

    return (
        <>
            <Box className="header__avatar">
                <Tooltip title="Mi Cuenta">
                    <IconButton onClick={handleClick}>
                        <Avatar sx={{ bgcolor: blueGrey[600] }}>{firstChar}</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
            <MenuItem>
                Perfil
            </MenuItem>
            <MenuItem>
                Configuración
            </MenuItem>
            <MenuItem>
                <Link to="/loader">
                    Subir
                </Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout}>
                Salir
            </MenuItem>
      </Menu>            
        </>
    )
}

export default AvatarHeader;