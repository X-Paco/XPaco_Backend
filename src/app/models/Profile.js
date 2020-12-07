import Sequelize, { Model } from 'sequelize';
class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        einItin: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        codEstado: {
          type: Sequelize.STRING(6),
          allowNull: true,
        },
        phone: {
          type: Sequelize.STRING(11),
          allowNull: true,
        },
        num: {
          type: Sequelize.STRING(9),
          allowNull: true,
        },
        address: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        district: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        cidade: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        state: {
          type: Sequelize.STRING(2),
          allowNull: true,
        },
        zipCode: {
          type: Sequelize.STRING(10),
          allowNull: true,
        },
        birthDate: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        photo: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'profiles',
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, {
      targetKey: 'id',
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      allowNull: false,
    });
    this.sync();
    // A. (B, { /* options */ });
    // Para criar um relacionamento Um para Um ,
    // as associações hasOne e belongsTo são usadas juntas.

  }
}
export default Profile; 
