import { Router } from 'express';
import Usuario from './app/models/Usuarios';

const Routes = new Router();

Routes.get('/teste', async (req, res) => {
  const usuario = await Usuario.create({
    tipo_id: '2',
    email: 'email@email.com',
    senha_hash: '123456',
  });

  return res.json(usuario);
});

export default Routes;
