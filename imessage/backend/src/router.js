import express from 'express';
const router = express.Router();

import { createUser, loginUser, getUsersMessages } from './user.controller.js';
import { addMessaje, getMessages } from './message.controller.js';
import verifyToken from './verifyToken.js';


router.post('/addUser', createUser);
router.post('/login', loginUser);
router.get('/getUsers', verifyToken, getUsersMessages);

router.post('/addMessage', verifyToken, addMessaje);
router.get('/getMessages', verifyToken, getMessages);

export default router;