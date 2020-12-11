import * as Yup from 'yup';
import User from '../models/User';
import Member from '../models/Member';
class UserController {

  /********************************************************************
  * CONTROLLER - CRIAR USUÁRIO NO BD 
  * __________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * memberId | name | nickname | email | mobile | oldPassword | password | passwordConfirm
  ********************************************************************/
  async store(req, res) {

    const bodyReq = req.body;
    /********************************************************************
     * Validação do corpo da requisição
     * memberId, name, nickname, email, password, passwordHash, mobile,
    ********************************************************************/
    const schema = Yup.object().shape(
      {
        memberId: Yup.number().required(),
        name: Yup.string().required().max(50),
        nickname: Yup.string().required().max(15),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
        passwordConfirm: Yup.string().required()
          .oneOf(
            [Yup.ref('password')], 'As senhas não correspondem!'
          ),
        mobile: Yup.string().max(12),
      }
    );
    if (!(await schema.isValid(bodyReq))) {
      return res.status(401).json({ error: 'Falha na validação!' })
    }
    /********************************************************************
     * Criar Constantes, desistruturando o corpo da requisição
     * memberId, name, nickname, email, password, passwordHash, mobile,
    ********************************************************************/
    const memberIdExist = await Member.findByPk(bodyReq.memberId);
    if (!memberIdExist) {
      return res.status(400).json({ error: `Grupo ${bodyReq.memberId} Não existente` });
    }
    const emailExist = await User.findOne({
      where: { email: bodyReq.email }
    });
    if (emailExist) {
      return res.status(400).json({ error: 'E-mail já existente' });
    }
    const nicknameExist = await User.findOne({
      where: { nickname: bodyReq.nickname }
    });
    if (nicknameExist) {
      return res.status(400).json({ error: 'Nickname já existente' });
    }
    const mobileExist = await User.findOne({
      where: { mobile: bodyReq.mobile }
    });
    if (mobileExist) {
      return res.status(400).json({ error: 'Mobile já existente' });
    }
    /*******************************************************************
     * GRAVANDO USER NO BANCO DE DADOS
     * __________________________________________________________________
     * No model User criamos this.addHook('beforeSave') que antes de gravar
     * verifica se existe user.password e gera hash para o passwordHash
    ********************************************************************/
    const { memberId, passwordHash, password, name, nickname, email, mobile, } = bodyReq;
    const user = await User.create({
      memberId, passwordHash, password, name, nickname, email, mobile,
    });
    return res.json({ user });
  }

  /********************************************************************
    * MÉTODO - ATUALIZAR USUÁRIO NO BD 
    * ________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * memberId | name | nickname | email | mobile | oldPassword | password
  ********************************************************************/
  async update(req, res) {
    /********************************************************************
     * Criar Constantes com corpo da requisição
    ********************************************************************/
    const bodyReq = req.body;
    /********************************************************************
     * Validação do corpo da requisição
     * memberId, name, nickname, email, password, passwordHash, mobile,
    ********************************************************************/
    const schema = Yup.object().shape(
      {
        memberId: Yup.number().required(),
        name: Yup.string().max(50),
        nickname: Yup.string().max(15),
        email: Yup.string().email(),
        oldPassword: Yup.string().min(6),
        password: Yup.string().min(6),
        mobile: Yup.string().max(12),
      }
    );
    if (!(await schema.isValid(bodyReq))) {
      return res.status(401).json({ error: 'Falha na validação!' })
    }
    /********************************************************************
     * Recebe tupla do Users se o TOKEN(id)[req.tkUserId] for encontrado.
     * ___________________________________________________________________
     * req.tkUserId criado  - no método try/catch em Middleware/auth.js
     * Middleware/auth.js é Chamado antes dos Controllers em routes.js 
     ********************************************************************/
    const userBd = await User.findByPk(req.tkUserId);

    if (bodyReq.memberId !== userBd.memberId) {
      return res.status(403).json({ error: 'Não é permitido substituir o grupo!' });
    }
    if (bodyReq.name !== userBd.name) {
      const nameExist = await User.findOne({
        where: { name: bodyReq.name }
      });
      if (nameExist) {
        return res.status(403).json({ error: 'Nome já existente' });
      }
    }
    if (bodyReq.nickname !== userBd.nickname) {
      const nicknameExist = await User.findOne({
        where: { nickname: bodyReq.nickname }
      });
      if (nicknameExist) {
        return res.status(403).json({ error: 'Nickname já existente' });
      }
    }
    if (bodyReq.email !== userBd.email) {
      const emailExist = await User.findOne({
        where: { email: bodyReq.email },
      });
      if (emailExist) {
        return res.status(403).json({ error: 'E-mail Já existente.' });
      }
    }
    if (bodyReq.mobile !== userBd.mobile) {
      const mobileExist = await User.findOne({
        where: { mobile: bodyReq.mobile },
      });
      if (mobileExist) {
        return res.status(403).json({ error: 'Celular já cadastrado' });
      }
    }
    if (await userBd.checkPassword(bodyReq.oldPassword)) {
      return res.status(403).json({ error: 'Senha atual incorreta.' });
    }
    const { memberId, passwordHash, password, name, nickname, email, mobile, } = bodyReq;
    const user = await User.update({
      memberId, passwordHash, password, name, nickname, email, mobile,

    },
      {
        where: { id: userBd.id },
      }
    );
    return res.json(bodyReq);
  }

  /********************************************************************
  * MÉTODO - LISTAR USUÁRIO NO BD 
  * __________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * | email |   ou req.params - paramId
  ********************************************************************/
  async index(req, res) {
    // ==============================================================
    const paramId = parseInt(req.params.paramId);  // 4
    if (!Number.isNaN(paramId)) {
      if (paramId == req.tkUserId) {
        const user = await User.findByPk(req.tkUserId);
        if (!user) {
          return res.status(400).json({ error: `o argumento ${user.id}` });
        }
        return res.json({ user });
      } else {
        return res.status(403).json({ error: 'Não autorizado' });
      }
    }
    const bodyReq = req.body;
    const schema = Yup.object().shape(
      {
        paramId: Yup.number(),
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
    const user = await User.findByPk(req.tkUserId);
    if (!user) {
      return res.status(400).json({ error: 'usuário da sessão nao existe' });
    }
    if (bodyReq.email !== user.email) {
      return res.status(401).json({ error: 'Não autorizado' });
    }
    return res.json({ user });
  }
  /********************************************************************
  * MÉTODO - REMOVER USUÁRIO NO BD 
  * __________________________________________________________________
    * atributos do BODY da REQUISIÇÃO:
    * memberId | name | nickname | email | mobile | oldPassword | password 
  ********************************************************************/
  async delete(req, res) {
    // ==============================================================
    const paramId = parseInt(req.params.paramId);  // 4
    if (!Number.isNaN(paramId)) {
      if (paramId == req.tkUserId) {
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
    // ================== V A L I D A C A O =========================
    const bodyReq = req.body;

    const schema = Yup.object().shape(
      {
        paramId: Yup.number(),
        name: Yup.string().max(50),
        nickname: Yup.string().max(15),
        email: Yup.string().email().required(),
        oldPassword: Yup.string().min(6),
        password: Yup.string().min(6),
        mobile: Yup.string().max(12),
      }
    );
    if (!(await schema.isValid(bodyReq))) {
      return res.status(401).json({ error: 'Falha na validação!' });
    }
    // ==================================================================
    const idExist = await User.findByPk(req.tkUserId);
    const emailExist = await User.findOne({
      where: { email: bodyReq.email },
    });

    if (!emailExist) {
      return res.status(400).json({ error: `email ${bodyReq.email} não encontrado!` });
    }
    if (((emailExist.email !== idExist.email) && (req.tkMemberId !== 1))) {
      return res.status(401).json({ error: `Não autorizado` });
    }
    await emailExist.destroy();
    return res.send();
  }
}
export default new UserController;