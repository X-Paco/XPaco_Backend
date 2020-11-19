const Usuario = require('../models/Usuarios');

module.exports = {
  async store(req, res) {
    const { email, senha_rash } = req.body;
    const usuario = await Usuario.create({ email, senha_rash });

    return res.json(usuario);
  }
};