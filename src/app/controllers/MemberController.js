import Member from '../models/Member';

class MemberController {
  async store(req, res) {

    const memberExist = await Member.findOne({
      where: { description: req.body.description },
    });
    if (memberExist) {
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

    // Se usuário logado for diferente de 1(administrador), recusar.
    if (req.tkMemberId && (req.tkMemberId !== 1)) {
      return res.status(403).json({ error: 'Não tem autorização' });
    }

    const memberExiste = await Member.findOne({
      where: { description: bodyReq.description },
    });
    if (memberExiste) {
      return res.status(400).json({ error: 'Tipo já existente.' });
    }

    // Desconstruir
    const { description } = await Member.update({
      description: bodyReq.description,
    },
      {
        where: { description: bodyReq.oldDescription },
      }
    );
    const resposta = bodyReq.description;
    return res.json(resposta);

  }
}
export default new MemberController(); 