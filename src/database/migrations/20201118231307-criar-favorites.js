module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('favorites', {
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      production_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'productions',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      }
    })
      .then(() => {
        return queryInterface.addConstraint('favorites', ['user_id', 'production_id'], {
          type: 'primary key',
          name: 'favorite_pkey',
        });
      });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('favorites');
  }
};