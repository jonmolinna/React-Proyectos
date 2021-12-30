import React from 'react';
import './PostFooter.css';
import { IconButton } from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

const PostFooter = () => {
    return (
        <div className='postFooter'>
           <aside className='postFooter_button'>
               <IconButton>
                   <ModeCommentOutlinedIcon sx={{ fontSize: 15 }} />
               </IconButton>
               <span className='postFooter__count'>12</span>
           </aside>
           <aside className='postFooter_button'>
               <IconButton>
                   <RepeatOutlinedIcon sx={{ fontSize: 15 }} />
               </IconButton>
               <span className='postFooter__count'>10</span>
           </aside>
           <aside className='postFooter_button'>
               <IconButton>
                   <FavoriteBorderOutlinedIcon sx={{ fontSize: 15 }} />
               </IconButton>
               <span className='postFooter__count'>2</span>
           </aside>
           <aside className='postFooter_button'>
               <IconButton>
                   <IosShareOutlinedIcon sx={{ fontSize: 15 }} />
               </IconButton>
           </aside>
        </div>
    )
}

export default PostFooter
