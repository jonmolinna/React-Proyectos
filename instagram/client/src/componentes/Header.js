import React, { useState } from 'react';
import './Header.css';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null)
    };

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
                      Guardado
                    </MenuItem>
                    <MenuItem>
                      Configuración
                    </MenuItem>
                    <MenuItem>
                      Cambiar de Cuenta
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      Salir
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Header;