// import sequelize from 'sequelize';
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
        tableName: 'users',
      }
    );
    return this;
  }
  // carregar as asssociações:
  static associate(models) {
    this.belongsTo(models.TypeUser, {
      targetKey: 'id',
      foreignKey: 'typeuserId',
      as: 'typeuser',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasOne(models.Profile, {
      foreignKey: 'userId',
      as: 'user',

    });
    this.hasMany(models.Production, {
      foreignKey: 'userId',
      sourceKey: ,
      as: 'production',
      onDelete: 'CASCADE',
      hooks: true,
    });
    this.belongsToMany(models.Production, {
      through: 'favorites',
      foreignKey: 'productionId',
      as: 'favorite',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

  }
}
export default User; 