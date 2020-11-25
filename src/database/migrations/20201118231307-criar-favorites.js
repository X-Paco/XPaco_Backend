module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('favorites', {
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      production_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'productions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
    // .then(() => {
    //   return queryInterface.addConstraint('favorites', ['user_id', 'production_id'], {
    //     type: 'primary key',
    //     name: 'favorite_pkey',
    //     unique: true,
    //   });
    // });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('favorites');
  }
};