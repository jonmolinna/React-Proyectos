import React, { useState } from 'react';
import './PostBotons.css';
import { IconButton } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ModalPost from './ModalPost';

const PostBotons = () => {
    const [open, setOpen] = useState(false);

    const openModalPost = () => setOpen(true);
    const closeModalPost = () => setOpen(false);

    return (
        <div className='postBotons'>
            <IconButton onClick={openModalPost}>
                <ImageOutlinedIcon />
            </IconButton>
            <IconButton>
                <EmojiEmotionsOutlinedIcon />
            </IconButton>
            <IconButton>
                <CalendarTodayOutlinedIcon />
            </IconButton>

            <ModalPost 
                isOpen={open} 
                closeModalPost={closeModalPost} 
            />
        </div>
    )
}

export default PostBotons;