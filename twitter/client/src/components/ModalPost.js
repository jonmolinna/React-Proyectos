import React, { useState } from 'react';
import './ModalPost.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { IconButton, Button } from '@mui/material';
import { toast } from 'react-hot-toast';

import axios from '../util/axios';
import Loading from './Loading';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outerWidth: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
};

const ModalPost = ({ isOpen, closeModalPost }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [comment, setComment] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('tokenTwitterclone');

    const handleFileChange = (e) => {
        const [file] = e.target.files;
        let img = e.target.files[0];
        setImage(img)

        // convertiendo a base 64
        const reader = new FileReader();
        reader.onloadend = () => {
            // console.log('>>>', reader.result);
            setSelectedFile(reader.result);
        }
        reader.readAsDataURL(file);
        e.target.value = '';
    }

    const addPost = async () => {
        setLoading(true);
        try {
            let formData = new FormData();
            formData.append('image', image);
            formData.append('comment', comment)

            let options = {
                headers: {
                    "authorization": `${token? token : null}`,
                },
            };
            const res = await axios.post('/post', formData, options);
            toast.success(res.data.message)
            setComment('');
            setSelectedFile(null);
            closeModalPost();
            setImage('')
            
        } catch (err) {
            toast.error(err.response.data.message);
            console.log('err', err.response)
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            open={isOpen}
            onClose={closeModalPost}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='postModal'>
                    <TextField
                        multiline
                        rows={3}
                        variant="standard"
                        placeholder="What's happening?"
                        fullWidth
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <div className='postModal_btns'>
                        <IconButton className='postModal_file'>
                            <ImageOutlinedIcon />
                            <input 
                                type="file"
                                name='image' 
                                style={{ opacity: 0}}
                                onChange={handleFileChange}
                            />
                        </IconButton>
                        <Button 
                            variant="contained" 
                            size="small"
                            onClick={addPost}
                            // disabled={!(comment.trim().length > 3 || image) ? false : true}
                        >
                            Tweet
                        </Button>
                    </div>
                    {
                        loading && (
                            <div className='postModal_loading'>
                                <Loading />
                            </div>
                        )
                    }
                    <aside className='postModal_img'>
                        <img src={selectedFile} alt="" />
                    </aside>
                </div>
            </Box>
        </Modal>
    )
}

export default ModalPost;