'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('productions', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // userId: {
    //   type: Sequelize.INTEGER,
    //   references: { model: 'favorites', key: 'userId' },
    //   allowNull: false,
    //   onUpdate: 'CASCADE',
    //   onDelete: 'RESTRICT',
    // },
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
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('productions')
};
