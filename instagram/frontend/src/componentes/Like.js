import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { toast } from 'react-toastify';

import { useAuthState } from '../context/auth.js';
import axios from '../util/axios.js';

const Like = ({ postId, likes }) => {
    const { user } = useAuthState();
    const token = localStorage.getItem('tokenInstagram');
    const [liked, setLiked] = useState(false);

    console.log('Like')

    const handleLike = async () => {
        if(!user) return false;

        try {
            let options = {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token? token : null}`
                }
            }
            await axios(`/likePost?postId=${postId}`, options);
        } catch (error) {
            toast.error(error.response.data.message)
            // console.log(error.response)
        }

    };

    useEffect(() => {
        if( user && likes.find(like => like.username === user.username)){
            setLiked(true);
        } else {
            setLiked(false)
        }
    }, [user, likes]);

    return (
        <IconButton onClick={handleLike}>
            {
                liked? <FavoriteIcon sx={{ color: red[600] }} /> : <FavoriteBorderIcon />
            }
            
        </IconButton>
    )
}

export default Like
