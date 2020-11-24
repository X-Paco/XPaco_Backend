import Sequelize, { Model } from 'sequelize';
class Favorite extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsToMany(models.Production, { foreignKey: 'production_id', as: 'production' });
  }
}
export default User; 