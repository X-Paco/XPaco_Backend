import Sequelize, { Model } from 'sequelize';

class TypeUser extends Model {
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
    this.hasMany(models.User, {
      as: 'type',
    });
    // TypeUser.hasMany(User) - associação significa que existe um relacionamento
    // Um-para-Muitos entre TypeUser e User, com a chave estrangeira sendo definida 
    // no modelo de destino ( User).
    // e depois faço um apelido para type
  }
}
export default TypeUser;