'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('contains', {
    material_id: {
      type: Sequelize.INTEGER,
      references: { models: 'materials', key: 'id' },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    publicacao_id: {
      type: Sequelize.INTEGER,
      references: { model: 'productions', key: 'id' },
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

  down: async (queryInterface) => queryInterface.dropTable('contains')
};