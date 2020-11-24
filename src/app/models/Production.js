import Sequelize, { Model } from 'sequelize';
class Production extends Model {
  static init(sequelize) {
    super.init(
      {
        tag: Sequelize.STRING,
        checking: Sequelize.BOOLEAN,
        description: Sequelize.STRING,
        link: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasMany(models.Media, { as: 'media' });
    this.belongsToMany(models.Material, { through: 'containUser_Profiles' });)
    // Production.hasMany(Media) - associação significa que existe um relacionamento
    // Um-para-Muitos entre Production e Media, com a chave estrangeira sendo definida no modelo de destino ( Media).
    // e depois faço um apelido para type
  }
}
export default Production;