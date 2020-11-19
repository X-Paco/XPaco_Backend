'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Favoritas', {
    favorita_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { models: 'users', key: 'user_id' },
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

  down: async (queryInterface) => queryInterface.dropTable('Favoritas')
};
