import express from 'express';
const router = express.Router();

import { getAllMessages, addMessage } from '../controllers/chat.controller.js';

router.get('/message', getAllMessages);
router.post('/message/add', addMessage);

export default router;