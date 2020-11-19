'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Tipos_Users', {
    tipo_id: {
      type: Sequelize.INTEGER,
      /* definido como false - um campo não pode ser criado como nulo */
      allowNull: false,
      /* defindo true - habilita o banco a criar como auto incremente */
      autoIncrement: true,
      /* chave primaria não pode ter dois ou mais registros de mesmo valor e também não pode ter valor nulo */
      primaryKey: true,
    },
    descricao: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('Tipos_Users')
};
