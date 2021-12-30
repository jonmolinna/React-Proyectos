import React from 'react';
import './SidebarRow.css';

const SidebarRow = ({ Icon, title}) => {
    return (
        <div className='sidebarRow'>
            <Icon />
            <h2 className='sidebarRow_title'>{title}</h2>
        </div>
    )
}

export default SidebarRow;