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
        type_id: Sequelize.INTEGER,
        nickname: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        mobile: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
export default User;