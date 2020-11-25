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

    // A A.belongsToMany(B, { through: 'C' })associação significa que existe um relacionamento muitos-para-muitos entre Ae B, usando a tabela Ccomo tabela de junção , que terá as chaves estrangeiras ( aIde bId, por exemplo). Sequelize irá criar automaticamente este modelo C(a menos que já exista) e definir as chaves estrangeiras apropriadas nele.
  }
}
export default User; 