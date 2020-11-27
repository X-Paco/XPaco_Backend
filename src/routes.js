import { Router } from 'express';

import UserController from './app/controllers/UserController';
import TypeUserController from './app/controllers/TypeUserController';

const routes = new Router();
routes.post('/typeusers', TypeUserController.store);
routes.post('/users', UserController.store);


export default routes;
