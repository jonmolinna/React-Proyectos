import { Router } from 'express';

import { UserController } from './../controller/UserController';
import { checkJwt } from '../middlewares/jwt';

const router = Router();

// Create User
router.post('/', UserController.addUser);

// Lista de Users
router.get('/', [checkJwt], UserController.getUsers);

export default router;