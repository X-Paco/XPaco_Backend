import jwt from 'jsonwebtoken';
// transforma uma callback em async
import { promisify } from 'util';

import authKey from '../../config/authkey';

// inseri o async para poder usar o await logo abaixo
export default async (req, res, next) => {

  // recebe do header o campo authorization da requisição
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não existe.' });
  }
  /* vamos separar o Bearer do token:
    [, resto] descartar a primeira posição e coletar o restante
    após o espaço, ficando apenas o "token"  */
  const [, token] = authHeader.split(' ');

  // usarei um try - catch para caso der erro ter uma resposta
  try {
    const decoded = await promisify(jwt.verify)(token, authKey.secret);

    // criando uma variável userId para ser utilizada no userController
    req.userId = decoded.id;

    return next();

  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};