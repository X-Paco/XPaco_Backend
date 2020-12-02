import Sequelize, { Model } from 'sequelize';
class Media extends Model {
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
        tableName: 'medias',
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Publication, {
      targetKey: 'id',
      foreignKey: 'PublicationId',
      as: 'publication',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    // Media.belongsTo(Publication) - Pertence-à => associação significa que existe um relacionamento
    // Um para Um entre Media e Publication, com a chave estrangeira sendo definida no
    // modelo de origem (Media).
  }
}
export default Media;