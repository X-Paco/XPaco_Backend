'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('profiles', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // userId: {
    //   type: Sequelize.INTEGER,
    //   references: { model: 'users', key: 'id' },
    //   allowNull: false,
    //   onUpdate: 'RESTRICT',
    //   onDelete: 'RESTRICT',
    // },
    einItin: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    codEstado: {
      type: Sequelize.STRING(3),
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING(11),
      allowNull: true,
    },
    num: {
      type: Sequelize.STRING(9),
      allowNull: true,
    },
    address: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    district: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    cidade: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    state: {
      type: Sequelize.STRING(2),
      allowNull: true,
    },
    zipCode: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    birthDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: true,
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

  down: async (queryInterface) => queryInterface.dropTable('profiles')
};