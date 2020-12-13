'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('users', 'memberId', {
    type: Sequelize.INTEGER,
    references: {
      model: 'member',
      key: 'id'
    },
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }),

  down: async (queryInterface) => queryInterface.removeColumn('users', 'memberId')
}
