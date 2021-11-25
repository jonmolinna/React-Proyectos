import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import { useAuthDispatch } from '../context/auth';

const AvatarHeader = () => {
    const dispatch = useAuthDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

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
                        <Avatar src="https://avatars.githubusercontent.com/u/54208914?v=4"/>
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
            <Divider />
            <MenuItem onClick={logout}>
                Salir
            </MenuItem>
      </Menu>            
        </>
    )
}

export default AvatarHeader;