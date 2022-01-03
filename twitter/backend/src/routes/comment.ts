import { Router } from 'express';

import { CommentController } from '../controller/CommentController';
import { checkJwt } from '../middlewares/jwt';

const router = Router();

// Add Comment
router.post('/', [checkJwt], CommentController.addComment);

// Get Comment
router.get('/', [checkJwt], CommentController.getCommentByIdPost);

export default router;