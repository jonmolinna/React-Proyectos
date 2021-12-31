import { Router } from 'express';

import { PostController } from '../controller/PostController';
import { checkJwt } from '../middlewares/jwt';
import upload from '../middlewares/uploadMulter';
import validationImg from '../utils/validationImg';

const router = Router();

// Add Post
router.post('/', [checkJwt, upload, validationImg], PostController.addPost);

export default router;