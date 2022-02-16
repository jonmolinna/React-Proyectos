import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
    const user = null;

    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-pinterest-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className="topListItem" >
                        <Link className='link' to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {
                            user && "LOGOUT" 
                        }
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                {
                    user? (
                        <img
                            className='topImg'
                            src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643903733/rlou1oguwhxhawlmoabm.png"
                            alt=""
                        />
                    ) : (
                        <ul className='topList'>
                            <li className="topListItem" >
                                <Link className='link' to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem" >
                                <Link className='link' to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
};

export default TopBar;