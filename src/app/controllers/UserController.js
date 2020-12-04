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

    const { id, memberId, name, nickname, email, password, passwordHash, mobile, } = req.body;
    // no model User criamos o conteúdo para o passwordHash
    const user = await User.create({
      memberId: req.body.memberId, passwordHash, name, nickname, email, password, mobile,
    });

    return res.json({ user });
  }
  //TODO No auth inserimos uma variável userId com o código do 
  // usuário capturado na sessão.

  async update(req, res) {
    console.log(req.userId);

    const idusuario = req.userId;

    return res.json({ idusuario });
  }
}
export default new UserController;