import * as Yup from 'yup';
import Member from '../models/Member';

class MemberController {

  /********************************************************************
 * CONTROLLER - CRIAR MATERIAL 
 * __________________________________________________________________
   * atributos do BODY da REQUISIÇÃO:
   * Id | Description
 ********************************************************************/
  async store(req, res) {

    if (req.tkMemberId !== 1) {
      return res.status(400).json({ error: 'Grupo não permitido' })
    }
    const bodyReq = req.body;
    const schema = Yup.object().shape(
      {
        description: Yup.string().required().min(3).max(50),
      }
    );
    if (!(await schema.isValid(bodyReq))) {
      return res.status(401).json({ error: 'Falha na validação schema!' });
    }

    const descExist = await Member.findOne({
      where: { description: bodyReq.description }
    });
    if (descExist) {
      return res.status(400).json({ error: 'Tipo já existente.' });
    }
    const member = await Member.create(bodyReq);
    return res.json({ member });
  }

  /********************************************************************
    * CONTROLLER - ATUALIZAR MATERIAL 
    * ________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * Id | Description  | oldDescription
  ********************************************************************/
  async update(req, res) {

    if (req.tkMemberId && (req.tkMemberId !== 1)) {
      return res.status(400).json({ error: 'Grupo não permitido' })
    }

    const bodyReq = req.body;
    const schema = Yup.object().shape(
      {
        id: Yup.number(),
        description: Yup.string().required().min(3).max(50),
        oldDescription: Yup.string().required().min(3).max(50),
      }
    );
    if (!(await schema.isValid(bodyReq))) {
      return res.status(401).json({ error: 'Falha na validação!' });
    }
    const idExist = await Member.findByPk(bodyReq.id);
    if (idExist && (idExist.description == bodyReq.oldDescription)) {
      await idExist.update({ description: bodyReq.description });

      return res.json({ idExist });
    }
    const descExist = await Member.findOne({
      where: { description: bodyReq.oldDescription }
    });
    if (!descExist) {
      return res.status(400).json({ error: 'Descrição não existe' });
    }
    await descExist.update({
      description: bodyReq.description,
    });

    return res.json({ descExist });
  }

  /********************************************************************
  * CONTROLLER - LISTAR MATERIAL 
  * __________________________________________________________________
   * atributos do BODY da REQUISIÇÃO:
   * | email | req.params | paramId | tkMemberId | tkUserId
   * -----------------------------------------------------------------
   * /:paramId ==> Rota 1  | / ==> Rota 2 (com body / sem body) 
  ********************************************************************/
  async show(req, res) {

    if (req.tkMemberId !== 1) {
      return res.status(400).json({ error: 'Grupo não permitido' })
    }
    const paramId = parseInt(req.params.paramId);
    if (!Number.isNaN(paramId)) {

      const idExist = await Member.findByPk(paramId, {
        attributes: [
          'id', 'description'
        ],
      });
      if (!idExist) {
        return res.status(400).json({ error: `o argumento ${idExist} não existe` });
      }
      return res.json({ idExist });
    }
    const bodyReq = req.body;
    const schema = Yup.object().shape(
      {
        id: Yup.number(),
        description: Yup.string().min(3).max(50),
      }
    );
    if (!(await schema.isValid(bodyReq))) {
      return res.status(401).json({ error: 'Falha na validação!' });
    }
    const idExist = await Member.findByPk(bodyReq.id, {
      attributes: ['id', 'description']
    });
    if (idExist) {
      return res.json({ idExist });
    }
    const descExist = await Member.findOne({
      where: { description: bodyReq.oldDescription }
    });
    if (!descExist) {
      const listall = await Member.findAll({
        attributes: ['id', 'description']
      });
      return res.json({ listall });
    }
    return res.json(descExist);
  }
  /********************************************************************
  * CONTROLLER - REMOVER MATERIAL 
  * __________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * memberId | name | nickname | email | mobile | oldPassword | password 
  ********************************************************************/
  async delete(req, res) {

    // if (req.tkMemberId !== 1) {
    //   return res.status(400).json({ error: 'Grupo não permitido' })
    // }
    const paramId = parseInt(req.params.paramId);  // 4
    if (!Number.isNaN(paramId)) {

      const idExist = await Member.findByPk(paramId);
      if (!idExist) {
        return res.status(400).json({ error: 'registro não existe' });
      }
      await idExist.destroy();
      return res.send();
    }
    const { description } = req.body;
    const schema = Yup.object().shape(
      {
        description: Yup.string().required().max(50),
      }
    );
    if (!(await schema.isValid(description))) {
      return res.status(401).json({ error: 'Falha na validação!' });
    }
    const descExist = await Member.findOne({
      where: { description },
    });
    if (!descExist) {
      return res.status(400).json({ error: 'registro não existe' });
    }
    await descExist.destroy();
    return res.send();
  }
}
export default new MemberController;