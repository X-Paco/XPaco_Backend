import Sequelize, { Model } from 'sequelize';
class Publication extends Model {
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
        tableName: 'publications',
      }
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.Media, {
      sourceKey: 'id',
      foreignKey: 'publicationId',
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
      foreignKey: 'publicationId',
      as: 'publicationFavorite',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.belongsToMany(models.Material, {
      through: 'publicationMaterials',
      foreignKey: 'publicationId',
      as: 'publication',
    });

    // Publication.hasMany(Media) - associação significa que existe um relacionamento
    // Um-para-Muitos entre Publication e Media, com a chave estrangeira sendo definida no modelo de destino ( Media).
    // e depois faço um apelido para type.
  }
}
export default Publication;