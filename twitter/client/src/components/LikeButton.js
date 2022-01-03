import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import { toast } from 'react-hot-toast';

import { useAuthState } from '../context/auth';
import axios from '../util/axios';

const LikeButton = ({ postId, likes }) => {
    const [liked, setLiked] = useState(false);
    const { user } = useAuthState();
    const token = localStorage.getItem('tokenTwitterclone');

    useEffect(() => {
        if (likes.length > 0 && likes.find(like => like.username === user.username)) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }, [user, likes]);

    const handleLike = async () => {
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                    "authorization": `${token? token : null}`,
                },
            };
            await axios(`/like?postId=${postId}`, options);
        } catch (err) {
            toast.error(err.response.message);
        }
    };

    return (
        <IconButton onClick={handleLike}>
            {
                liked? 
                (<FavoriteIcon sx={{ fontSize: 15, fill: pink[400] }} />) : 
                (<FavoriteBorderOutlinedIcon sx={{ fontSize: 15 }} />)
            }
        </IconButton>
    )
}

export default LikeButton
