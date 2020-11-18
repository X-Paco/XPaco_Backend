'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('juridicas', {
    razao: {
      type: Sequelize.INTEGER,
      /* definido como false - um campo não pode ser criado como nulo */
      allowNull: false,
      /* defindo true - habilita o banco a criar como auto incremente */
      autoIncrement: true,
      /* chave primaria não pode ter dois ou mais registros de mesmo valor e também não pode ter valor nulo */
      primaryKey: true,
    },
    cnpj: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    data_abertura: {
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

  down: (queryInterface) => queryInterface.dropTable('juridicas')
};
