import { Router } from 'express';

import TypeUser from './app/models/TypeUser';
import User from './app/models/User';
import Production from './app/models/Production';
import Material from './app/models/Material';
import Media from './app/models/Media';
import Profile from './app/models/Profile';

const Routes = new Router();

Routes.get('/teste', async (req, res) => {
  const typeuser = await TypeUser.create({
    description: 'Produtor',
  });

  return res.json(typeuser);
});

export default Routes;
