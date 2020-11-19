'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Tipos_Users', {
    user_id: {
      type: Sequelize.INTEGER,
      /* definido como false - um campo não pode ser criado como nulo */
      allowNull: false,
      /* defindo true - habilita o banco a criar como auto incremente */
      autoIncrement: true,
      /* chave primaria não pode ter dois ou mais registros de mesmo valor e também não pode ter valor nulo */
      primaryKey: true,
    },
    tipo_id: {
      type: Sequelize.INTEGER,
      references: { model: 'tipos_users', key: 'tipo_id' },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    cod_pais: {
      type: Sequelize.STRING(3),
      allowNull: true,
    },
    telefone: {
      type: Sequelize.STRING(12),
      allowNull: true,
    },
    numero: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    endereco: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    bairro: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    cidade: {
      type: Sequelize.STRING(30),
      allowNull: true,
    },
    uf: {
      type: Sequelize.STRING(2),
      allowNull: true,
    },
    cep: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    natureza: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    senha_hash: {
      type: Sequelize.STRING(50),
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

  down: async (queryInterface) => queryInterface.dropTable('usuarios')
};
