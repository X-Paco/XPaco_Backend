import { Router } from 'express';

import UserController from './app/controllers/UserController';
import TypeUserController from './app/controllers/TypeUserController';
//import Member from './app/models/Member';

const routes = new Router();

routes.post('/members', TypeUserController.store);

//routes.post('/sessions', SessionController.store);

/* Todas as rotas abaixo desse middleware precisam estar autenticados 
   ================================================================== */
//routes.use(authMiddleware);

//routes.put('/members', TypeUserController.update);

routes.post('/users', UserController.store);


export default routes;
