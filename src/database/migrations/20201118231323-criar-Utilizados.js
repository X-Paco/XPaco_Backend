'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Utilizados', {
    material_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    material_id: {
      type: Sequelize.INTEGER,
      references: { models: 'materiais', key: 'material_id' },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    publicacao_id: {
      type: Sequelize.INTEGER,
      references: { model: 'publicacoes', key: 'publicacao_id' },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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