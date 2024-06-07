import Sequelize, { Model } from 'sequelize';
class Media extends Model {
  static init(sequelize) {
    super.init(
      {
        description: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        checking: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
        link: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'medias',
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Publication, {
      targetKey: 'id',
      foreignKey: 'publicationId',
      as: 'publication',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.sync({ force: false }).then(() => { });
    // Media.belongsTo(Publication) - Pertence-à => associação significa que existe um relacionamento
    // Um para Um entre Media e Publication, com a chave estrangeira sendo definida no
    // modelo de origem (Media).
  }
}
export default Media;