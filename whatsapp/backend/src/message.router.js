import express from 'express';
const router = express.Router();

import { 
    addGrupoMessage, 
    addMessage, 
    getLastMessageGroups, 
    getGroup, 
    getLastMessageGroup } from './message.controller.js';

router.post('/addGrupo', addGrupoMessage);
router.post('/addMessage', addMessage);

router.get('/getLastMessageGroups', getLastMessageGroups);
router.get('/getGroup', getGroup);
router.get('/getLastMessageGroup', getLastMessageGroup);

export default router;