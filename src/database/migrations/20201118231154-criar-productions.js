'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('productions', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    tag: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    checking: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
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

  down: async (queryInterface) => queryInterface.dropTable('productions')
};
