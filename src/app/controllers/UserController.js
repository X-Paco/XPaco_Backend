import User from '../models/User';

class UserController {
  /********************************************************************
    * MÉTODO - INSERIR USUÁRIO NO BD 
  ********************************************************************/
  async store(req, res) {

    const emailExist = await User.findOne({
      where: { email: req.body.email }
    });
    if (emailExist) {
      return res.status(400).json({ error: 'E-mail já existente' });
    }
    const nicknameExist = await User.findOne({
      where: { nickname: req.body.nickname }
    });
    if (nicknameExist) {
      return res.status(400).json({ error: 'Nickname já existente' });
    }
    const mobileExist = await User.findOne({
      where: { mobile: req.body.mobile }
    });
    if (mobileExist) {
      return res.status(400).json({ error: 'Mobile já existente' });
    }

    /********************************************************************
     * Criar Constantes, desistruturando o corpo da requisição
    ********************************************************************/
    const { memberId, name, nickname, email, password, passwordHash, mobile, } = req.body;
    /********************************************************************
     * GRAVANDO USER NO BANCO DE DADOS
     * No model User criamos this.addHook('beforeSave') que antes de gravar
     * gera o conteúdo para o passwordHash
    ********************************************************************/
    const user = await User.create({
      memberId, passwordHash, password, name, nickname, email, mobile,
    });

    return res.json({ user });
  }
  /********************************************************************
    * ATUALIZAR BD DE USERS 
    * ________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * memberId | name | nickname | email | mobile | oldPassword | password
  ********************************************************************/
  async update(req, res) {
    /********************************************************************
     * Criar Constantes desistruturando o corpo da requisição
    ********************************************************************/
    const bodyReq = req.body;

    /********************************************************************
     * CONSTANTE recebe tupla/BD em json, se TOKEN(id) for encontrado
     * ___________________________________________________________________
     * req.tkUserId, req.tkMemberId foram inseridas na requisição e criadas
     * em auth.js no método try/catch.
     ********************************************************************/
    const userBd = await User.findByPk(req.tkUserId);

    if (bodyReq.email && (bodyReq.email !== userBd.email)) {
      const emailExist = await User.findOne({
        where: { email: bodyReq.email },
      });
      if (emailExist) {
        return res.status(400).json({ error: 'E-mail Já existente.' });
      }
    }
    if (bodyReq.oldPassword && !(await userBd.checkPassword(bodyReq.oldPassword))) {
      return res.status(401).json({ error: 'Senha atual incorreta.' });
    }

    const aa = bodyReq.email;
    const ab = userBd.email;
    const ad = userBd.passwordHash;
    const ac = bodyReq.oldPassword;
    return res.json({ aa, ab, ac, ad, });

  }
}
export default new UserController;