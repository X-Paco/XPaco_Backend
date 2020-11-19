'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Utilizados', {
    midia_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    publicacao_id: {
      type: Sequelize.INTEGER,
      references: { model: 'publicacoes', key: 'publicacao_id' },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    curtida: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    check: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
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

  down: async (queryInterface) => queryInterface.dropTable('Utilizados')
};