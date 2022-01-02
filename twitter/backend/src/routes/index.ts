import { Router } from 'express';

import user from './user';
import auth from './auth';
import post from './post';
import like from './like';

const routes = Router();

routes.use('/user', user);
routes.use('/auth', auth);
routes.use('/post', post);
routes.use('/like', like);

export default routes;