'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('medias', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    production_id: {
      type: Sequelize.INTEGER,
      references: { model: 'productions', key: 'id' },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    checking: {
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

  down: async (queryInterface) => queryInterface.dropTable('medias')
};