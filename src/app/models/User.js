// import sequelize from 'sequelize';
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        // memberId: Sequelize.INTEGER,
        name: Sequelize.STRING,
        nickname: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        passwordHash: Sequelize.STRING,
        mobile: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
    /* antes de salvar vamos verificar se existe
       se existir, atribuir a passwordHash a conversão
       de password em hash para ser enviado ao controller e gravar no banco
        8 é força da criptgrafia   */
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.passwordHash = await bcrypt.hash(user.password, 8);
      }
    });
    /* chamar o init acima */
    return this;
  }
  /* TODO comparar o Hash gravado no banco com a senha digitada pelo 
      usuário  retornando um true ou false */
  checkPassword(password) {
    return bcrypt.compare(password, this.passwordHash);
  }
  // carregar as asssociações:
  static associate(models) {
    this.belongsTo(models.Member, {
      targetKey: 'id',
      foreignKey: 'memberId',
      as: 'member',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      hooks: true,
    });
    // adicionará userId(chave-estrangeira) à tabela de Profile.
    this.hasOne(models.Profile, {
      sourceKey: 'id',
      foreignKey: 'userId',
    });
    this.hasMany(models.Publication, {
      sourceKey: 'id',
      foreignKey: 'userId',
      as: 'publication',
    });
    this.belongsToMany(models.Publication, {
      through: 'favorites',
      foreignKey: 'userId',
      as: 'userFavorite',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

  }
}
export default User; 