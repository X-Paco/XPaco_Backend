import User from '../models/User';

class UserController {
  async store(req, res) {

    const userEmailExiste = await User.findOne({
      where: { email: req.body.email }
    });
    if (userEmailExiste) {
      return res.status(400).json({ error: 'E-mail já existente' });
    }
    const userNicknameExiste = await User.findOne({
      where: { nickname: req.body.nickname }
    });
    if (userNicknameExiste) {
      return res.status(400).json({ error: 'Nickname já existente' });
    }
    const userMobileExiste = await User.findOne({
      where: { mobile: req.body.mobile }
    });
    if (userMobileExiste) {
      return res.status(400).json({ error: 'Mobile já existente' });
    }

    /********************************************************************
     * Criar variáveis desconstruindo o corpo a requisição
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

  async update(req, res) {
    /********************************************************************
     * ATUALIZANDO USER NO BANCO DE DADOS 
     * 
     * req.tkUserId, req.tkMemberId foram inseridas na requisição criada
     * em auth.js no método try/catch.
     *  
     * Vamos utilizá-la para operações com este usuário logado.
     ********************************************************************/
    //   const { tkMemberId, tkUserId } = req.body;

    return res.json({ tk });
  }
}
export default new UserController;