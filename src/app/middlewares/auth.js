import jwt from 'jsonwebtoken';
/********************************************************************
 util.promisify - transforma uma callback em async
********************************************************************/
import { promisify } from 'util';
import authKey from '../../config/authkey';
import User from '../models/User'

/********************************************************************
 * AUTHENTICATE TOKEN
 * __________________________________________________________________
 * Verifica se existe token no Header da requisição e caso exista
 * separa o id e grupo do resto do token
 * ------------------------------------------------------------------
 * tkUserId |  tkMemberId | decode
********************************************************************/
export default async (req, res, next) => {
  /********************************************************************
   atribue a authHeader o campo authorization do header da requisição
  ********************************************************************/
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token Ausente!' });
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
   * - token, authKey.secret(frase pessoal criptografada) 
   * criada dentro do arquivo config/authkey.
   * decoded - recebe o {id, memberId}, {iat}=data criação, {exp}=data expiração.
   * Criando atributos do token  para o corpo da requisição:
   * tkUserId -> userId e
   * tkMemberId -> memberId  
   * Caso erro em "catch" retornar 401
   * ---- Usado em Controllers
   ********************************************************************/
  try {
    /********************************************************************
     * TOKEN DO USUÁRIO CAPTURADO:
     * __________________________________________________________________
     * Criando atributos do token  para o corpo da requisição:
     * tkUserId -> userId e
     * tkMemberId -> memberId  
     ********************************************************************/
    const decoded = await promisify(jwt.verify)(token, authKey.secret);
    req.tkUserId = decoded.id;
    req.tkMemberId = decoded.memberId;
    req.decode = decoded;
    const tkUserIdExist = await User.findByPk(req.tkUserId);
    if (!tkUserIdExist) {
      return res.status(403).json({ error: 'Token descredenciado' });
    }

    return next();

  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};