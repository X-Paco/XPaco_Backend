import Member from '../models/Member';

class MemberController {
  async store(req, res) {

    const memberExiste = await Member.findOne({
      where: { description: req.body.description },
    });
    if (memberExiste) {
      return res.status(400).json({ error: 'Tipo já existente.' });
    }

    // Desconstruir
    const { description } = await Member.create(req.body);

    return res.json({
      description,
    });
  }
}
export default new MemberController(); 