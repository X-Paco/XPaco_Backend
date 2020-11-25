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
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    });
    this.hasMany(models.Media, {
      as: 'media'
    });
    this.hasMany(models.Favorite, {
      as: 'favorite'
    });
    this.belongsToMany(models.Material, {
      through: 'productions_materials',
      as: 'material',
      foreignKey: 'material_id',
    });

    // Production.hasMany(Media) - associação significa que existe um relacionamento
    // Um-para-Muitos entre Production e Media, com a chave estrangeira sendo definida no modelo de destino ( Media).
    // e depois faço um apelido para type.
  }
}
export default Production;