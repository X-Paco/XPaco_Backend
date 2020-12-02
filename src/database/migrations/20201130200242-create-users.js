'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      /* definido como false - um campo não pode ser criado como nulo */
      allowNull: false,
      /* defindo true - habilita o banco a criar como auto incremente */
      autoIncrement: true,
      /* chave primaria não pode ter dois ou mais registros de mesmo valor e também não pode ter valor nulo */
      primaryKey: true,
    },
    memberId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'members',
        key: 'id'
      },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
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
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    mobile: {
      type: Sequelize.STRING(12),
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('users')
};
