import Sequelize, { Model } from 'sequelize';
class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        mobile: Sequelize.STRING,
        einItin: Sequelize.STRING,
        codEstado: Sequelize.STRING,
        phone: Sequelize.STRING,
        num: Sequelize.STRING,
        address: Sequelize.STRING,
        district: Sequelize.STRING,
        cidade: Sequelize.STRING,
        state: Sequelize.STRING,
        zipCode: Sequelize.STRING,
        birthDate: Sequelize.DATE,
        photo: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'profiles',
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, {
      targetKey: 'id',
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
    });
    // A. (B, { /* options */ });
    // Para criar um relacionamento Um para Um ,
    // as associações hasOne e belongsTo são usadas juntas.

  }
}
export default Profile; 
