import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import MemberController from './app/controllers/MemberController';
import UserController from './app/controllers/UserController';
import ProfileController from './app/controllers/ProfileController';
import Publicationtroller from './app/controllers/PublicationController';
import MediaController from './app/controllers/MediaController';
import MaterialController from './app/controllers/MaterialController';
import FavoriteController from './app/controllers/favoriteController';
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

// MEMBERS
routes.post('/members', MemberController.store);
routes.put('/members', MemberController.update);
routes.get('/members/:paramId', memberController.index);
routes.get('/members/', memberController.index);
routes.delete('/members/:paramId', memberController.delete);
routes.delete('/members/', memberController.delete);
// USERS
routes.put('/users', UserController.update);
routes.get('/users/:paramId', UserController.index);
routes.get('/users/', UserController.index);
routes.delete('/users/:paramId', UserController.delete);
routes.delete('/users/', UserController.delete);

// PROFILES
routes.post('/materials', MaterialController.store);
routes.put('/materials', MaterialController.update);
routes.get('/materials/:paramId', MaterialController.index);
routes.get('/materials/', MaterialController.index);
routes.delete('/materials/:paramId', MaterialController.delete);
routes.delete('/materials/', MaterialController.delete);

// PUBLICATIONS
routes.post('/publications', PublicationController.store);
routes.put('/publications', PublicationController.update);
routes.get('/publications/:paramId', PublicationController.index);
routes.get('/publications/', PublicationController.index);
routes.delete('/publications/:paramId', PublicationController.delete);
routes.delete('/publications/', PublicationController.delete);

// MEDIAS
routes.post('/medias', MediaController.store);
routes.put('/medias', MediaController.update);
routes.get('/medias/:paramId', MediaController.index);
routes.get('/medias/', MediaController.index);
routes.delete('/medias/:paramId', MediaController.delete);
routes.delete('/medias/', MediaController.delete);

// MATERIALS
routes.post('/materials', MaterialController.store);
routes.put('/materials', MaterialController.update);
routes.get('/materials/:paramId', MaterialController.index);
routes.get('/materials/', MaterialController.index);
routes.delete('/materials/:paramId', MaterialController.delete);
routes.delete('/materials/', MaterialController.delete);

export default routes;
