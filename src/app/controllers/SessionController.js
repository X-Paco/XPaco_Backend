/* ******************************************************************* 
 obs.: A importação de módulos vem sempre acima das importações de arquivos
 de um projeto exemplo: import jwt from 'jsonwebtoken';
*******************************************************************  */
import jwt from 'jsonwebtoken';

import authKey from '../../config/authkey';
import User from '../models/User';


class SessionController {
  /******************************************************************** 
  será feita a verificação do cadastro. Existindo, solicita ao model a
  criação do token
  ********************************************************************/
  async store(req, res) {
    /******************************************************************** 
     descontruir o body obtendo apenas email e pasword recebido pela requisição
    ********************************************************************/
    const { email, password } = req.body;
    /******************************************************************** 
     Varrer o banco a procura de uma tupla onde o email: email o retorno 
     é atribuído a user, se não encontrar retorna erro 401 
    ********************************************************************/
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Usuário não existe.' });
    }
    /* ******************************************************************* 
      vamos desconstruir o user e obtendo 3 atributos da tupla  
    ******************************************************************** */
    const { id, name, memberId, passwordHash, mobile, } = user;
    /* ******************************************************************* 
      (checkPassword) é a função importada do model User.
      Passamos o password como paramentro e verificamos se password é igual
      ao passwordHash. O retorno pode ser false ou true.
      Se retorno não for true retornamos um res.status erro 401.
    * *********************************************************************/
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha Incorreta.' });
    }
    /********************************************************************
     * Se tudo estiver correto vamos retornar json com os atributos 
    ********************************************************************/
    return res.json({
      user: {
        id,
        name,
        email,
        mobile,
        memberId,
        passwordHash,
      },
      /********************************************************************
        O atributo token será composto por:
        (id e memberId do usuário) +  (frase pessoal criptografada) + (expiresIn: 7d dias)
        O arquivo authKey, foi criado na pasta /config com 2 atributos
        authKey.secret: (frase pessoal) foi gerada em https://www.md5online.org/
        authKey.expiresIn: (tempo para expiração)
        o arquivo authKey está salvo na pasta /config .
            
        Criação de token: 
      ********************************************************************/
      token: jwt.sign({ id, memberId }, authKey.secret, { expiresIn: authKey.expiresIn, }),
    });
  }
}

export default new SessionController();