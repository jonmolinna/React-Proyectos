import React, { useState } from 'react';
import './PostInput.css';
import { IconButton, Button } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import axios from '../util/axios.js';

const PostInput = ({ postId }) => {
    const [comment, setComment] = useState('');
    const token = localStorage.getItem('tokenInstagram');

    console.log('POSTINPUT')

    const handleSubmit = async () => {
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                    'Authorization': `Bearer ${token? token : null}`
                },
                data: JSON.stringify({
                    comment: comment,
                })
            };

            await axios(`/commentPost?postId=${postId}`, options)
            setComment('')
        } catch (error) {
            console.log(error.response)
        }
    };

    return (
        <div className='postinput'>
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
            <input 
                type="text" 
                placeholder='Agrega un comentario...'
                value={comment}
                onChange={e => setComment(e.target.value)} 
            />
            <Button 
                className="postinput__btn" 
                variant="text" disabled={comment.length > 0 ? false : true}
                onClick={handleSubmit}
            >
                Publicar
            </Button>
        </div>
    )
}

export default PostInput
