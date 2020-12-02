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
    this.hasMany(models.Media, {
      as: 'media',
    });
    this.belongsTo(models.User, {
      foreignKey: 'userId',
      sourceKey: ,
      as: 'pro',
      onDelete: 'CASCADE',
      hooks: true,
    });
    this.belongsToMany(models.User, {
      through: 'favorite',
      foreignKey: 'userId',
      as: 'user',
    });
    this.belongsToMany(models.Material, {
      through: 'productionMaterials',
      as: 'material',
      foreignKey: 'materialId',
    });

    // Production.hasMany(Media) - associação significa que existe um relacionamento
    // Um-para-Muitos entre Production e Media, com a chave estrangeira sendo definida no modelo de destino ( Media).
    // e depois faço um apelido para type.
  }
}
export default Production;