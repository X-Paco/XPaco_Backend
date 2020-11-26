import Sequelize, { Model } from 'sequelize';
class User extends Model {
  static init(sequelize) {
    super.init(
      {
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
  static associate(models) {
    this.belongsTo(models.TypeUser, {
      through: 'type_users',
      foreignKey: 'type_id',
      as: 'type',
    });
    this.hasOne(models.Profile, {
      foreignKey: 'user_id',
      as: 'profile',
    });
    this.hasMany(models.Production, {
      as: 'production',
    });
    this.hasMany(models.Favorite, {
      foreignKey: 'user_id',
      as: 'favorite',
    });

    // A.hasOne(B, { /* options */ });

  }
}
export default User; 