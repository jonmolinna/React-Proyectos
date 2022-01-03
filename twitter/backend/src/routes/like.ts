import { Router } from 'express';

import { LikeController } from '../controller/LikeController';
import { checkJwt } from '../middlewares/jwt';

const router = Router()

// Add Like
router.post('/', [checkJwt], LikeController.addLike);

// Get Likes
router.get('/', [checkJwt], LikeController.getLikesByIdPost);

export default router;