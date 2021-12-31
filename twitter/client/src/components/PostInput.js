import React, { useState } from 'react';
import './PostInput.css';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { toast } from 'react-hot-toast';
import PostBotons from './PostBotons';

import axios from '../util/axios';

const PostInput = () => {
    const [comment, setComment] = useState('');
    const token = localStorage.getItem('tokenTwitterclone');

    const addComent = async () => {
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                    "authorization": `${token? token : null}`,
                },
                data: JSON.stringify({
                    comment: comment,
                })
            };
            const res = await axios('/post', options);
            toast.success(res.data.message)
            setComment('');
            
        } catch (err) {
            toast.error(err.response.data.message);
            // console.log('err', err.response)
        }
    };

    return (
        <div className='postInput'>
            <TextField 
                multiline
                rows={4}
                variant="standard"
                placeholder="What's happening?"
                fullWidth
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <div className='postInput_botons'>
                <PostBotons />
                <aside className='postInput_btnRight'>
                    <Button 
                        variant="contained"
                        disabled={comment.trim().length > 3 ? false : true}
                        onClick={addComent}
                    >
                        Tweet
                    </Button>
                </aside>
            </div>
        </div>
    );
};

export default PostInput;