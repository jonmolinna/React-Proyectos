import React, { useState, useEffect } from 'react';
import './PostFooter.css';
import { IconButton } from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import ModalComment from './ModalComment';
import { toast } from 'react-hot-toast';
import LikeButton from './LikeButton';

import axios from '../util/axios';

const PostFooter = ({ post }) => {
    const [isOpenModalComment, setIsOpenModalComment] = useState(false);
    const [comments, setComments] = useState([]);
    const [countComments, setCountComments] = useState(0);
    const [countLikes, setCountLikes] = useState(0);
    const [likes, setLikes] = useState([]);
    const token = localStorage.getItem('tokenTwitterclone');
    let postId = post.id;

    const openModalComment = () => setIsOpenModalComment(true);
    const closeModalComment = () => setIsOpenModalComment(false);

    useEffect(() => {
        const getPostById = async (postId) => {
            try {
                let options = {
                    method: "GET",
                    headers: {
                        "Content-type" : "application/json; charset=utf-8",
                        "authorization": `${token? token : null}`,
                    },
                };
                const res = await axios(`/comment?postId=${postId}`, options);
                setComments(res.data.posts)
                setCountComments(res.data.count)
            } catch (err) {
                // console.log('err', err.response);
                toast.error(err.response.message);
            }
        }

        getPostById(postId);
    }, [postId, token]);

    useEffect(() => {
        const getLikeByIdPost = async (postId) => {
            try {
                let options = {
                    method: "GET",
                    headers: {
                        "Content-type" : "application/json; charset=utf-8",
                        "authorization": `${token? token : null}`,
                    },
                };
                const res = await axios(`/like?postId=${postId}`, options);
                setCountLikes(res.data.count);
                setLikes(res.data.message)
            } catch (err) {
                // console.log('err', err.response);
                toast.error(err.response.message);
            }
        }

        getLikeByIdPost(postId);
    }, [postId, token]);

    return (
        <div className='postFooter'>
           <aside className='postFooter_button'>
               <IconButton onClick={openModalComment}>
                   <ModeCommentOutlinedIcon sx={{ fontSize: 15 }} />
               </IconButton>
               {
                   countComments > 0 && (
                    <span className='postFooter__count'>
                        {countComments}
                    </span>
                   )
               }
           </aside>
           <aside className='postFooter_button'>
               <LikeButton postId={postId} likes={likes} />
               {
                   countLikes > 0 && (
                    <span className='postFooter__count'>
                        { countLikes }
                    </span>
                   )
               }
           </aside>
           <aside className='postFooter_button'>
               <IconButton>
                   <RepeatOutlinedIcon sx={{ fontSize: 15 }} />
               </IconButton>
           </aside>
           <aside className='postFooter_button'>
               <IconButton>
                   <IosShareOutlinedIcon sx={{ fontSize: 15 }} />
               </IconButton>
           </aside>

           <ModalComment 
                isOpenModalComment={isOpenModalComment}
                closeModalComment={closeModalComment}
                comments={comments}
                postId={postId}
            />
        </div>
    )
}

export default PostFooter
