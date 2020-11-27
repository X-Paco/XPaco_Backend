import TypeUser from '../models/TypeUser';

class TypeUserController {
  async store(req, res) {
    return res.json({ ok: true });
  }
}
export default new TypeUserController(); 