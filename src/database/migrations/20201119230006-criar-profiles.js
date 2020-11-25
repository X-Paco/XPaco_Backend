module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('profiles', {
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
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT',
    },
    ein_itin: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    cod_country: {
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
    city: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    state: {
      type: Sequelize.STRING(2),
      allowNull: true,
    },
    zip_code: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    birth_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: true,
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

  down: async (queryInterface) => queryInterface.dropTable('profiles')
};