import express from 'express';
const router = express.Router();

import { createUser, loginUser, getThreeUsers } from '../controllers/user.controller.js';
import { createPost, getAllPosts } from '../controllers/post.controller.js';
import { likePost } from '../controllers/like.controller.js';
import { commentPost } from '../controllers/commet.controller.js';
import upload from '../middlewares/upload.multer.js';
import validationImg from '../utils/validation.img.js'; 
import verifyToken from '../utils/verifyToken.js';

router.post('/addUser', createUser);
router.post('/login', loginUser);
router.get('/getUsers', getThreeUsers);

router.post('/post', verifyToken, upload, validationImg, createPost);
router.get('/posts', getAllPosts);

router.post('/likePost', verifyToken, likePost);
router.post('/commentPost', verifyToken, commentPost);

export default router;