import React, { useState } from 'react';
import './ModalComment.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Button, Avatar } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import moment from 'moment';
import { toast } from 'react-hot-toast';

import { Capitalize } from '../util/capitalize';
import { chatAt } from '../util/chatAt';
import axios from '../util/axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outerWidth: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
  };

const ModalComment = ({ isOpenModalComment, closeModalComment, comments, postId }) => {
    const [comment, setComment] = useState('');
    const token = localStorage.getItem('tokenTwitterclone');

    const handleComment = async () => {
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                    "authorization": `${token? token : null}`,
                },
                data: JSON.stringify({
                    body: comment.trim(),
                }),
            };

            const res = await axios(`comment?postId=${postId}`, options);
            setComment('');
            toast.success(res.data.message);
            console.log(res)
        } catch (err) {
            toast.error(err.response.message);
        }
    }

    return (
        <Modal
            open={isOpenModalComment}
            onClose={closeModalComment}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='modalComment'>
                    <aside className='modalComment_header'>
                        <TextField
                            multiline
                            rows={2}
                            variant="standard"
                            placeholder="Reply"
                            fullWidth
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />
                        <Button 
                            variant="contained"
                            size="small"
                            disabled={comment.trim().length > 3 ? false : true}
                            onClick={handleComment}
                        >
                            Tweet
                        </Button>
                    </aside>
                    <aside className='modalComment_comments'>
                        {
                            comments && comments.map(comment => (
                                <article className='modalComment_comment' key={comment.id}>
                                    <Avatar 
                                        className='modalComment_avatar'
                                        sx={{ bgcolor: blueGrey[700] }}
                                    >
                                        {chatAt(comment.name)}
                                    </Avatar>
                                    <div className='modalComment_right'>
                                        <div className="modalComment_user">
                                            <h3>{Capitalize(comment.name)}</h3>
                                            <time>{moment(comment.createdAt).startOf('hour').fromNow(true)}</time>
                                        </div>
                                        <p>{comment.comment}</p>
                                    </div>
                                </article>
                            ))
                        }
                    </aside>
                </div>
            </Box>
        </Modal>
    )
}

export default ModalComment
