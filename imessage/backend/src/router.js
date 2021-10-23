import express from 'express';
const router = express.Router();

import { createUser, loginUser } from './user.controller.js'


router.post('/addUser', createUser);
router.post('/login', loginUser);

export default router;