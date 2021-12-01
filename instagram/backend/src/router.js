import express from 'express';
const router = express.Router();

import { createUser, loginUser } from './user.controller.js';
import { createPost } from './post.controller.js';
import upload from './middlewares/upload.js';
import validationImg from './middlewares/validation.img.js'; 

router.post('/addUser', createUser);
router.post('/login', loginUser);

router.post('/post', upload, validationImg, createPost);

export default router;