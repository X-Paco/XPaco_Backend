/* Modo antigo
//import { Sequelize } from 'sequelize';
//const { Model, DataTypes } = require('sequelize');
Ex:
email: DataTypes.STRING,
*/
import Sequelize, { Model } from 'sequelize';
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nickname: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        mobile: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.TypeUser, { foreignKey: 'type_id', as: 'type_user' });
  }
}
export default User;