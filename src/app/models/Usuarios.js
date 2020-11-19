const { Model, DataTypes } = require('sequelize');
class users extends Model {
  static init(sequelize) {
    super.init({
      tipo_id: DataTypes.STRING,
      email: DataTypes.STRING,
      senha_hash: DataTypes.STRING,
    }, { Sequelize },
    );
  }
}
export default users;