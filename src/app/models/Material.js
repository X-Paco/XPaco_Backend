import Sequelize, { Model } from 'sequelize';

class Material extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING(50),
        oldDescription: Sequelize.VIRTUAL,
      },
      {
        sequelize,
        tableName: 'materials',
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsToMany(models.Publication, {
      through: 'publicationMaterials',
      foreignKey: 'materialId',
      as: 'materialPublication',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.sync({ force: true }).then(() => { });
    /* Material.belongsToMany(Media, { through: 'Publication_material' }) - associação significa que existe 
      um relacionamento muitos-para-muitos entre Material e Publication, usando a tabela Publication_material 
      como tabela de junção que terá as chaves estrangeiras ( materia_Id e publication_Id). 
      Sequelize irá criar automaticamente este modelo Publication_material(a menos que já exista) e definir as chaves estrangeiras apropriadas nele.
      Obs.: 
      Cria um relacionamento muitos para muitos , duas chamadas belongsToMany serão usadas se referindo a (dois models)
      Essas três chamadas farão com que o Sequelize adicione automaticamente
      chaves estrangeiras aos modelos apropriados (a menos que já estejam presentes).
    */
  }
}
export default Material;