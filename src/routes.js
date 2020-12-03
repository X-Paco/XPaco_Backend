import { Router } from 'express';

import MemberController from './app/controllers/MemberController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/members', MemberController.store);
routes.post('/sessions', SessionController.store);

/* Todas as rotas abaixo desse middleware precisam estar autenticados 
   ================================================================== */
//routes.use(authMiddleware);

//routes.put('/members', TypeUserController.update);

routes.post('/users', UserController.store);


export default routes;
