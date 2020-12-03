/* obs.: A importação de módulos vem sempre acima das importações de arquivos de um projeto
exemplo: import jwt from 'jsonwebtoken'; */

import jwt from 'jsonwebtoken';

import authKey from '../../config/authkey';
import User from '../models/User';

class SessionController {
  async store(req, res) {

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Usuário não existe.' });
    }
    //TODO Verificar se a senha não bate
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha Incorreta.' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      /* o atributo token será composto por:
          (id) +  (frase pessoal) + (algumas configurações)
          para nã ficar exposto vou criar um arquivo com 2 atributos
          secret: (frase pessoal)
          expiresIn: (tempo para expiração)
          na pasta config que já possui configuração para banco e senha.
      */
      //TODO Criação de token
      token: jwt.sign({ id }, authKey.secret, { expiresIn: authKey.expiresIn, }),
    });
  }
}

export default new SessionController();