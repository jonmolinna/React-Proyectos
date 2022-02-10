import React from 'react';
import Sidebar from '../components/Sidebar';
import './Setting.css';

const Setting = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img
                            src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643903733/rlou1oguwhxhawlmoabm.png"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display: "none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Safak' />
                    <label>Email</label>
                    <input type="email" placeholder='email@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
};

export default Setting;