import Member from '../models/Member';

class TypeUserController {
  async store(req, res) {
    // TODO: validar antes de construir
    const memberExiste = await Member.findOne({
      where: { description: req.body.description },

    });
    if (memberExiste) {
      return res.status(400).json({ error: 'Tipo já existente.' });
    }

    // construir
    const { description } = await Member.create(req.body);

    return res.json({
      description,
    });
  }
}
export default new TypeUserController(); 