import React from 'react';
import './MenuHeader.css';
import { Link } from 'react-router-dom';

const MenuHeader = () => {

    return (
        <>
        <Link to="/login" className="MenuHeader__Login">
            Iniciar sesión
        </Link>
        <Link to="/register" className="MenuHeader__Register">
            Registrate
        </Link>
        </>
    )
}

export default MenuHeader;