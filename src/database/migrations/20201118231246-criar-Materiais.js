'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Materiais', {
    material_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: Sequelize.STRING(50),
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

  down: async (queryInterface) => queryInterface.dropTable('Materiais')
};
