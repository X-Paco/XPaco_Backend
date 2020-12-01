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
      through: 'productionMaterials',
      as: 'production',
      foreignKey: 'productionId',
    });
    /* Material.belongsToMany(Media, { through: 'Production_material' }) - associação significa que existe 
      um relacionamento muitos-para-muitos entre Material e Production, usando a tabela Production_material 
      como tabela de junção que terá as chaves estrangeiras ( materia_Id e production_Id). 
      Sequelize irá criar automaticamente este modelo Production_material(a menos que já exista) e definir as chaves estrangeiras apropriadas nele.
      Obs.: 
      Cria um relacionamento muitos para muitos , duas chamadas belongsToMany serão usadas se referindo a (dois models)
      Essas três chamadas farão com que o Sequelize adicione automaticamente
      chaves estrangeiras aos modelos apropriados (a menos que já estejam presentes).
    */
  }
}
export default Material;