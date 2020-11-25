module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('productions_materials', {
    material_id: {
      type: Sequelize.INTEGER,
      references: { models: 'materials', key: 'id' },
      allowNull: false,
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT',
    },
    publicacao_id: {
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
  }),

  down: async (queryInterface) => queryInterface.dropTable('productions_materials')
};