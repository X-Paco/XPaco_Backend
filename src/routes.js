import { Router } from 'express';

import TypeUser from './app/models/TypeUser';
import User from './app/models/User';
import Production from './app/models/Production';
import Material from './app/models/Material';
import Favorite from './app/models/Favorite';
import Contain from './app/models/Contain';
import Media from './app/models/Media';
import Profile from './app/models/Profile';
const Routes = new Router();

Routes.get('/tipousuario', async (req, res) => {
  const TypeUser = await TypeUser.create({
    description: 'Pessoa Física',
  });

  return res.json(TypeUser);
});

export default Routes;
