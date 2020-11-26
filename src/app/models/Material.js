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
      through: 'Production_material',
      as: 'production',
      foreignKey: 'production_id',
    });
    /* Production.hasMany(Media) - associação significa que existe um relacionamento
       Um-para-Muitos entre Production e Media, com a chave estrangeira sendo definida no modelo de destino ( Media).
       e depois faço um apelido para type
      Essas três chamadas farão com que o Sequelize adicione automaticamente
      chaves estrangeiras aos modelos apropriados (a menos que já estejam presentes).
    */
  }
}
export default Material;