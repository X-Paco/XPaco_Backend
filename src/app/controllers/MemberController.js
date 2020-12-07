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
     * Recebe tupla do Users se o TOKEN(id)[req.tkUserId] for encontrado.
     * ___________________________________________________________________
     * req.tkUserId criado  - no método try/catch em Middleware/auth.js
     * Middleware/auth.js é Chamado antes dos Controllers em routes.js 
     ********************************************************************/
    const userBd = await User.findByPk(req.tkUserId);

    // Se usuário logado for diferente de 1(administrador), recusar.
    if (userBd.memberId && (userBd.memberId !== 1)) {
      return res.status(403).json({ error: 'Não tem autorização' });
    }

    const memberExiste = await Member.findOne({
      where: { description: req.body.description },
    });
    if (memberExiste) {
      return res.status(400).json({ error: 'Tipo já existente.' });
    }

    // Desconstruir
    const { description } = await Member.update(req.body);

    return res.json({
      description,
    });

    return res.json({
      memberId, name,
    });
  }
}
export default new MemberController(); 