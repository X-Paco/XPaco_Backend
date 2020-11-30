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
    };

    const { type_id, name, nickname, email, password_hash, mobile, } = req.body;
    const users = await User.create({
      type_id: req.type_id,
      name, nickname, email, password_hash, mobile,
    });

    return res.json({ type_id, name, nickname, email, password_hash, mobile, });
  }
}
export default new UserController;