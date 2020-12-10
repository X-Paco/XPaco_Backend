import * as Yup from 'yup';
import Material from '../models/Material';

class MaterialController {

  /********************************************************************
 * CONTROLLER - CRIAR MATERIAL 
 * __________________________________________________________________
   * atributos do BODY da REQUISIÇÃO:
   * Id | Description
 ********************************************************************/
  async store(req, res) {

    return res.json({ ok: true });
  }
  /********************************************************************
    * CONTROLLER - ATUALIZAR MATERIAL 
    * ________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * Id | Description
  ********************************************************************/
  async update(req, res) {

    return res.json({ ok: true });
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

    const paramMaterial = parseInt(req.params.paramMaterial);  // 4
    if (!Number.isNaN(paramMaterial)) {

      if (paramMaterial == req.tk) {
        const user = await User.findByPk(req.tkUserId);
        if (!user) {
          return res.status(400).json({ error: 'nao existe' });
        }
        await user.destroy();
        return res.send();
      } else {
        return res.status(403).json({ error: 'Não autorizado' });
      }
    }
    const bodyReq = req.body;
    const schema = Yup.object().shape(
      {
        paramMaterial: Yup.number(),
        name: Yup.string().max(50),
        nickname: Yup.string().max(15),
        email: Yup.string().email(),
        oldPassword: Yup.string().min(6),
        password: Yup.string().min(6),
        mobile: Yup.string().max(12),
      }
    );
    if (!(await schema.isValid(bodyReq))) {
      return res.status(401).json({ error: 'Falha na validação!' });
    }
    const user = await Material.findByPk(req.tkMaterialId);
    if (!user) {
      return res.status(400).json({ error: 'Usuário da sessão nao existe' });
    }
    if (bodyReq.email !== user.email) {
      return res.status(401).json({ error: `Não autorizado` });
    }
    await user.destroy();
    return res.send();
  }
}
export default new MaterialController;