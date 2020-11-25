import Sequelize, { Model } from 'sequelize';
class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        mobile: Sequelize.STRING,
        ein_itin: Sequelize.STRING,
        cod_country: Sequelize.STRING,
        phone: Sequelize.STRING,
        num: Sequelize.STRING,
        address: Sequelize.STRING,
        district: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        zip_code: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        photo: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    // A. (B, { /* options */ });
    // Para criar um relacionamento Um para Um ,
    // as associações hasOne e belongsTo são usadas juntas.

  }
}
export default Profile; 
