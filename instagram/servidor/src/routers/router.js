import express from 'express';
const router = express.Router();

import { createUser, loginUser } from '../controllers/user.controller.js';
import { createPost, getAllPosts } from '../controllers/post.controller.js';
import upload from '../middlewares/upload.multer.js';
import validationImg from '../utils/validation.img.js'; 
import verifyToken from '../utils/verifyToken.js';

router.post('/addUser', createUser);
router.post('/login', loginUser);

// router.post('/post',verifyToken, upload, validationImg, createPost);
router.post('/post', verifyToken, upload, validationImg, createPost);
router.get('/posts', getAllPosts);

export default router;