import { Router } from 'express';

import UserController from './app/controllers/UserController';
import TypeUserController from './app/controllers/TypeUserController';
//import TypeUser from './app/models/TypeUser';

const routes = new Router();

routes.post('/typeusers', TypeUserController.store);

//routes.post('/sessions', SessionController.store);

/* Todas as rotas abaixo desse middleware precisam estar autenticados 
   ================================================================== */
//routes.use(authMiddleware);

//routes.put('/typeusers', TypeUserController.update);

routes.post('/users', UserController.store);


export default routes;
