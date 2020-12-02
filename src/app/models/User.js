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
    this.belongsTo(models.Member, {
      targetKey: 'id',
      foreignKey: 'memberId',
      as: 'member',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      hooks: true,
    });
    // adicionará userId(chave-estrangeira) à tabela de Profile.
    this.hasOne(models.Profile, {
      sourceKey: 'id',
      foreignKey: 'userId',
    });
    this.hasMany(models.Publication, {
      sourceKey: 'id',
      foreignKey: 'userId',
      as: 'publication',
    });
    this.belongsToMany(models.Publication, {
      through: 'favorites',
      foreignKey: 'userId',
      as: 'userFavorite',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

  }
}
export default User; 