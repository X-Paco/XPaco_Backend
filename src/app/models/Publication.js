import Sequelize, { Model } from 'sequelize';
class Publication extends Model {
  static init(sequelize) {
    super.init(
      {
        tag: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        checking: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        link: {
          type: Sequelize.STRING,
          allowNull: false,
        },
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
      allowNull: false,
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
      as: 'publicationMaterial',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.sync({ force: false }).then(() => { });
    // Publication.hasMany(Media) - associação significa que existe um relacionamento
    // Um-para-Muitos entre Publication e Media, com a chave estrangeira sendo definida no modelo de destino ( Media).
    // e depois faço um apelido para type.
  }
}
export default Publication;