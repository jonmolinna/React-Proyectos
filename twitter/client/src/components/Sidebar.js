import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <aside className='sidebar_header'>
                <TwitterIcon sx={{ fontSize: 35 }} />
            </aside>
            <aside className='sidebar_body'>
                <SidebarRow Icon={HomeIcon} title="Home" />
                <SidebarRow Icon={NumbersOutlinedIcon} title="Explore" />
                <SidebarRow Icon={NotificationsNoneOutlinedIcon} title="Notifications" />
                <SidebarRow Icon={MailOutlineOutlinedIcon} title="Messages" />
                <SidebarRow Icon={BookmarkBorderOutlinedIcon} title="Bookmarks" />
                <SidebarRow Icon={ListAltOutlinedIcon} title="Lists" />
                <SidebarRow Icon={PermIdentityOutlinedIcon} title="Profile" />
                <SidebarRow Icon={SmsOutlinedIcon} title="More" />
            </aside>
            <aside className='sidebar_avatar'>
                <Avatar />
                <article className='sidebar_user'>
                    <div className='sidebar_username'>
                        <h3>Jon Dallase</h3>
                        <p>@dallase123</p>
                    </div>
                    <div>
                        <MoreHorizIcon />
                    </div>
                </article>
            </aside>
        </div>
    )
}

export default Sidebar
