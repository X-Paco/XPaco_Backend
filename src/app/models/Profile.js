import Sequelize, { Model } from 'sequelize';
class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        mobile: Sequelize.STRING,
        einItin: Sequelize.STRING,
        codCountry: Sequelize.STRING,
        phone: Sequelize.STRING,
        num: Sequelize.STRING,
        address: Sequelize.STRING,
        district: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        zipCode: Sequelize.STRING,
        birthDate: Sequelize.DATE,
        photo: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
    // A. (B, { /* options */ });
    // Para criar um relacionamento Um para Um ,
    // as associações hasOne e belongsTo são usadas juntas.

  }
}
export default Profile; 
