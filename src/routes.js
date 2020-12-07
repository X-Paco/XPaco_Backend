import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import MemberController from './app/controllers/MemberController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
/********************************************************************
 * middlewares/auth verifica a existência, validade do token 
 * no cabeçalho (headers.authorization).
 * OBS.: 
 * Todas as rotas abaixo desse middleware precisam estar autenticados 
********************************************************************/
routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/members', MemberController.store);
routes.put('/members', MemberController.update);




export default routes;
