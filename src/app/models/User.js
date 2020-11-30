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
      foreignKey: 'type_id',
      as: 'type',
    });
    this.hasOne(models.Profile, {
      foreignKey: 'user_id',
      as: 'profile',
    });
    this.belongsToMany(models.Production, {
      through: 'Favorite',
      foreignKey: 'production_id',
      as: 'production',
    });

  }
}
export default User; 