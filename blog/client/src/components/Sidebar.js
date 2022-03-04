import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:9000/api/categories");
            setCats(res.data);
        };

        getCats();

    }, []);

    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1620836401/portafolio/experience-2_kfeidq.jpg" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur corrupti earum tempore blanditiis quibusdam
                </p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {
                        cats.map((cat) => (
                            <Link to={`/?cat=${cat.name}`} key={cat._id} className="link">
                                <li className="sidebarListItem">{cat.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;