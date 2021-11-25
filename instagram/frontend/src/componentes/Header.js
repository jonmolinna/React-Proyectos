import React from 'react';
import './Header.css';
import AvatarHeader from './AvatarHeader';
import MenuHeader from './MenuHeader';
import { Link } from 'react-router-dom';

import { useAuthState } from '../context/auth';

const Header = () => {
  const { user } = useAuthState();

  return (

    <div className="header">
      <div className="container">
        <div className="header__img">
          <Link to="/">
            <img 
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
              alt="logo" 
            />
          </Link>
        </div>
        <div className="header__input">
          <input type="search" placeholder="Buscar" />
        </div>
        <div>
          {
            user ? <AvatarHeader /> : <MenuHeader />
          }
        </div>
      </div>
    </div>
  )
}

export default Header;