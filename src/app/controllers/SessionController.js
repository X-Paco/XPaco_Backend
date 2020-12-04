/* obs.: A importação de módulos vem sempre acima das importações de arquivos de um projeto
exemplo: import jwt from 'jsonwebtoken'; */
import jwt from 'jsonwebtoken';

import authKey from '../../config/authkey';
import User from '../models/User';

class SessionController {
  async store(req, res) {

    // descontruir o body obtendo apenas email e pasword recebido pela requisição
    const { email, password } = req.body;

    /* varrer o banco a procura de uma tupla onde o email: email
        o retorno é atribuído a user */
    const user = await User.findOne({ where: { email } });
    /* se não encontrar retorna erro 401 */
    if (!user) {
      return res.status(401).json({ error: 'Usuário não existe.' });
    }

    /*TODO A função importada do model User (checkPassword) retorna true ou false.
     Vamos perguntar se não True, retornaremos um res.status erro 401 
     Passamos o password como paramentro e obtemos o resultado*/
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha Incorreta.' });
    }
    /* desconstruir o user e obtendo 3 atributos   */
    const { id, name, memberId, passwordHash, } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        memberId,
        passwordHash,
      },
      /* o atributo token será composto por:
          (id do usuário) +  (frase pessoal criptografada) + (expiresIn: 7d dias)
          para nã ficar exposto vou criar um arquivo com 2 atributos
          secret: (frase pessoal)
          expiresIn: (tempo para expiração)
          o arquivo authKey está salvo na pasta /config .
          obs:https://www.md5online.org/
          
          Criação de token */

      token: jwt.sign({ id }, authKey.secret, { expiresIn: authKey.expiresIn, }),
    });
  }
}

export default new SessionController();