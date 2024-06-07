// import sequelize from 'sequelize';
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(15),
          allowNull: false,
          unique: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        mobile: {
          type: Sequelize.STRING(12),
          allowNull: true,
        },
        passwordHash: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        password: Sequelize.VIRTUAL,
        passwordConfirm: Sequelize.VIRTUAL,
        oldPassword: Sequelize.VIRTUAL,
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
    /********************************************************************
     * CRIANDO HASH
     * addHook(beforeSave) - antes de salvar executar: 
     * se existir user.password, atribuir a user.passwordHash o hash 
     * criado pelo bcrypt.hash através dos parâmentros passados - 
     * password e  8 é a força da criptgrafia   
    ********************************************************************/
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.passwordHash = await bcrypt.hash(user.password, 8);
      }
    });
    /* chamar o init acima */
    return this;
  }
  /********************************************************************
   * FUNÇÃO QUE COMPARA A SENHA DA REQUISIÇÃO / HASH DO BANCO
   * 
   * Comparar o Hash gravado no banco com a senha obtida na requisição  
   * retornando um true ou false 
  ********************************************************************/
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
      allowNull: false,
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
    this.sync({ force: false }).then(() => { });
  }
}
export default User; 