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

    const { id, memberId, name, nickname, email, passwordHash, mobile, } = req.body;
    const users = await User.create({
      memberId: req.body.memberId, name, nickname, email, passwordHash, mobile,
    });

    return res.json({ id, memberId, name, nickname, email, passwordHash, mobile, });
  }
}
export default new UserController;