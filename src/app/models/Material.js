import Sequelize, { Model } from 'sequelize';

class Material extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsToMany(models.Production, {
      through: 'productions_materials',
      as: 'production',
      foreignKey: 'production_id',
    });
    // Production.hasMany(Media) - associação significa que existe um relacionamento
    // Um-para-Muitos entre Production e Media, com a chave estrangeira sendo definida no modelo de destino ( Media).
    // e depois faço um apelido para type
  }
}
export default Material;