import Sequelize, { Model } from 'sequelize';
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        // type_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
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
  // carregar as asssociações:
  static associate(models) {
    this.belongsTo(models.TypeUser, {
      foreignKey: 'typeuserId',
      as: 'type',
    });
    this.hasOne(models.Profile, {
      foreignKey: 'userId',
      as: 'profile',
    });
    this.belongsToMany(models.Production, {
      through: 'Favorite',
      foreignKey: 'productionId',
      as: 'production',
    });

  }
}
export default User; 