'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Fisicas', {
    cpf: {
      type: Sequelize.STRING(11),
      allowNull: false,
      unique: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'user_id' },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    nome: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    genero: {
      type: Sequelize.STRING(15),
      allowNull: true,
    },
    data_nascimento: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    foto: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('Fisicas')
};
