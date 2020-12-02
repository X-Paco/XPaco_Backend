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
        tableName: 'productions',
      }
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.Media, {
      sourceKey: 'id',
      foreignKey: 'productionId',
      as: 'media',
    });
    this.belongsTo(models.User, {
      targetKey: 'id',
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.belongsToMany(models.User, {
      through: 'favorites',
      foreignKey: 'userId',
      as: 'favorite',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.belongsToMany(models.Material, {
      through: 'productionMaterials',
      foreignKey: 'materialId',
      as: 'material',
    });

    // Production.hasMany(Media) - associação significa que existe um relacionamento
    // Um-para-Muitos entre Production e Media, com a chave estrangeira sendo definida no modelo de destino ( Media).
    // e depois faço um apelido para type.
  }
}
export default Production;