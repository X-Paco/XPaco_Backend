import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  /********************************************************************
    * MÉTODO - INSERIR USUÁRIO NO BD 
  ********************************************************************/
  async store(req, res) {

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

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação!' })

    }

    /********************************************************************
     * Criar Constantes, desistruturando o corpo da requisição
     * memberId, name, nickname, email, password, passwordHash, mobile,
    ********************************************************************/
    const { memberId, name, nickname, email, password, passwordConfirm, passwordHash, mobile, } = req.body;

    const emailExist = await User.findOne({
      where: { email: req.body.email }
    });
    if (emailExist) {
      return res.status(400).json({ error: 'E-mail já existente' });
    }
    const nicknameExist = await User.findOne({
      where: { nickname: req.body.nickname }
    });
    if (nicknameExist) {
      return res.status(400).json({ error: 'Nickname já existente' });
    }
    const mobileExist = await User.findOne({
      where: { mobile: req.body.mobile }
    });
    if (mobileExist) {
      return res.status(400).json({ error: 'Mobile já existente' });
    }
    /********************************************************************
     * GRAVANDO USER NO BANCO DE DADOS
     * __________________________________________________________________
     * No model User criamos this.addHook('beforeSave') que antes de gravar
     * verifica se existe user.password e gera hash para o passwordHash
    ********************************************************************/
    const user = await User.create({
      memberId, passwordHash, password, name, nickname, email, mobile,
    });

    return res.json({ user });
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

    if (bodyReq.memberId && (bodyReq.memberId !== userBd.memberId)) {
      return res.status(403).json({ error: 'Não é permitido substituir o grupo!' });
    }
    if (bodyReq.name && (bodyReq.name !== userBd.name)) {
      const nameExist = await User.findOne({
        where: { name: bodyReq.name }
      });
      if (nameExist) {
        return res.status(403).json({ error: 'Nome já existente' });
      }
    }
    if (bodyReq.nickname && (bodyReq.nickname !== userBd.nickname)) {
      const nicknameExist = await User.findOne({
        where: { nickname: bodyReq.nickname }
      });
      if (nicknameExist) {
        return res.status(403).json({ error: 'Nickname já existente' });
      }
    }
    if (bodyReq.email && (bodyReq.email !== userBd.email)) {
      const emailExist = await User.findOne({
        where: { email: bodyReq.email },
      });
      if (emailExist) {
        return res.status(403).json({ error: 'E-mail Já existente.' });
      }
    }
    if (bodyReq.mobile && (bodyReq.mobile !== userBd.mobile)) {
      const mobileExist = await User.findOne({
        where: { mobile: bodyReq.mobile },
      });
      if (mobileExist) {
        return res.status(403).json({ error: 'Celular já cadastrado' })
      }
    }
    if (bodyReq.oldPassword && !(await userBd.checkPassword(bodyReq.oldPassword))) {
      return res.status(403).json({ error: 'Senha atual incorreta.' });
    }
    const { name, } = bodyReq;
    const user = await User.update({
      name,
    });

    return res.json({
      memberId, name,
    });
  }
}
export default new UserController;