import jwt from 'jsonwebtoken';
/********************************************************************
 transforma uma callback em async
********************************************************************/
import { promisify } from 'util';
import authKey from '../../config/authkey';

/********************************************************************
 inseri o async para poder usar o await logo abaixo
********************************************************************/
export default async (req, res, next) => {
  /********************************************************************
   atribue a authHeader o campo authorization do header da requisição
  ********************************************************************/
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não existe.' });
  }
  /********************************************************************
  vamos separar o Bearer do token e [, resto] descartar a primeira 
  posição e coletar o restante após o espaço, ficando apenas o "token"  
  ********************************************************************/
  const [, token] = authHeader.split(' ');
  /********************************************************************
   * VALIDAÇÃO DO TOKEN e CAPTURA DO ID DO USUÁRIO:
   * 
   * primisify transforma uma callback em um async.
   * jwt.verify() é o callback que precisa dos parâmentros:
   * - token, authKey.secret(palavra chave criada dentro do arquivo config/authkey)
   * 
   * Criando um atributo para a requisição userId passando o id de 
   * decoded para ser utilizada no userController
   * 
   * Caso erro em "catch" retornar 401
   ********************************************************************/
  try {
    const decoded = await promisify(jwt.verify)(token, authKey.secret);
    // verificar a necessidade das duas req. abaixos ......
    req.userId = decoded.id;
    req.decodificado = decoded;
    return next();

  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};