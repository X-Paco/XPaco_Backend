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
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Production, {
      foreignKey: 'productionId',
      as: 'production',
    });
    // Media.belongsTo(Production) - Pertence-à => associação significa que existe um relacionamento
    // Um para Um entre Media e Production, com a chave estrangeira sendo definida no
    // modelo de origem (Media).
  }
}
export default Media;