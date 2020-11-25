'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productions_materials', {
      material_id: {
        type: Sequelize.INTEGER,
        references: { model: 'materials', key: 'id' },
        allowNull: false,
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
      },
      production_id: {
        type: Sequelize.INTEGER,
        references: { model: 'productions', key: 'id' },
        allowNull: false,
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }
    );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('productions_materials');
  }
};
