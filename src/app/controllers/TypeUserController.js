import TypeUser from '../models/TypeUser';

class TypeUserController {
  async store(req, res) {
    // TODO: validar antes de construir
    const typeuserExiste = await TypeUser.findOne({
      where: { description: req.body.description },

    });
    if (typeuserExiste) {
      return res.status(400).json({ error: 'Tipo já existente.' });
    }

    // construir
    const { description } = await TypeUser.create(req.body);

    return res.json({
      description,
    });
  }
}
export default new TypeUserController(); 