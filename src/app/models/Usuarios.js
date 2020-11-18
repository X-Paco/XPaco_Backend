import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      tipo_id: Sequelize.STRING,
      email: Sequelize.STRING,
      senha_hash: Sequelize.STRING,
    });
  }
}
export default Usuario;