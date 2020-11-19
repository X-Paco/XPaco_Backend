'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Juridicas', {
    cnpj: {
      type: Sequelize.STRING(14),
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
    rasao: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    data_abertura: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    logo: {
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

  down: async (queryInterface) => queryInterface.dropTable('Juridicas')
};
