import React from 'react';
import './Home.css';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Avatar, IconButton, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Post from './Post';

const Home = () => {
    return (
        <div className='home'>
            <article className='home_header'>
                <h2>Home</h2>
                <AutoFixHighIcon />
            </article>
            <article className='home_body'>
                <aside className='home_bodyHeader'>
                    <Avatar />
                    <div className='home_input'>
                        <TextField 
                            multiline
                            rows={4}
                            variant="standard"
                            placeholder="What's happening?"
                            fullWidth 
                        />
                        <div className='home_botons'>
                            <aside className='home_btnleft'>
                                <IconButton>
                                    <ImageOutlinedIcon />
                                </IconButton>
                                <IconButton>
                                    <EmojiEmotionsOutlinedIcon />
                                </IconButton>
                                <IconButton>
                                    <CalendarTodayOutlinedIcon />
                                </IconButton>
                            </aside>
                            <aside className='home_btnleft'>
                                <Button variant="contained">
                                    Tweet
                                </Button>
                            </aside>
                        </div>
                    </div>
                </aside>
                <aside className='home_posts'>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </aside>
            </article>
        </div>
    )
}

export default Home;