import express from 'express';
const router = express.Router();

import { getAllGroupos, addGrupo } from '../controllers/grupo.controller.js';

router.get('/grupo', getAllGroupos);
router.post('/grupo/add', addGrupo);

export default router;