import * as Yup from 'yup';
import Member from '../models/Member';

class MemberController {
  /********************************************************************
  * CONTROLLER - CRIAR MEMBRO 
  * __________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * tkMemberId | tkUserId | description | oldDescription 
  ********************************************************************/
  async store(req, res) {

    if (req.tkMemberId !== 1) {
      return res.status(400).json({ error: 'Grupo não permitido' })
    }
    const { description } = req.body;
    const schema = Yup.object().shape(
      {
        description: Yup.string().required().min(3).max(50),
      }
    );
    if (!(await schema.isValid(description))) {
      return res.status(401).json({ error: 'Falha na validação!' });
    }
    const memberExist = await Member.findOne({
      where: { description },
    });
    if (memberExist) {
      return res.status(400).json({ error: 'Tipo já existente.' });
    }
    const member = await Member.create(description);

    return res.json({ member });
  }

  /********************************************************************
    * MÉTODO - ATUALIZAR MEMBRO 
    * ________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * Id | description
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
  /********************************************************************
* CONTROLLER - LISTAR MATERIAL 
* __________________________________________________________________
 * atributos do BODY da REQUISIÇÃO:
 * | email |   ou req.params - paramMaterial
********************************************************************/
  async index(req, res) {

    return res.json({ ok: true });
  }
  /********************************************************************
  * CONTROLLER - REMOVER MATERIAL 
  * __________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * memberId | name | nickname | email | mobile | oldPassword | password 
  ********************************************************************/
  async delete(req, res) {

    return res.send();
  }

}
export default new MemberController(); 