import Sequelize, { Model } from 'sequelize';

class Member extends Model {
  static init(sequelize) {
    super.init(
      {
        description: {
          type: Sequelize.STRING(30),
          unique: true,
          allowNull: false,
        },
        oldDescription: Sequelize.VIRTUAL,
      },
      {
        sequelize,
        tableName: 'members',
      }
    );
    return this;
  }
  static associate(models) {
    this.hasOne(models.User, {
      sourceKey: 'id',
      foreignKey: 'memberId',
    });

    this.sync({ force: false }).then(() => { });
    // Member.hasMany(User) - associação significa que existe um relacionamento
    // Um-para-Muitos entre Member e User, com a chave estrangeira sendo definida 
    // no modelo de destino ( User).
    // e depois faço um apelido para type
  }
}
export default Member;