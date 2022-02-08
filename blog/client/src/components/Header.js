import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img
                className='headerImg'
                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643904771/l0j3fk9wpulqpqh7ayos.jpg"
                alt=""
            />
        </div>
    )
};

export default Header;
