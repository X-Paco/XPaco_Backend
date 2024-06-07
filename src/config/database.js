/*
Neste arquivo temos uma particularidade, ele não está usando o import/export , infelizmente o sequelize-cli  roda usando o commonJS então esse arquivo de configuração necessita estar em  commonJS
 */
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'dbadmin',
  password: 'Equipe25',
  database: 'xpacodb',
  define: {
    // não adicionar os atributos (updatedAt, createdAt)
    timestamps: true,
    // não adiciona camelcase para atributos gerados automaticamente
    // então se definirmos updatedAt ele será criado como updated_at
    underscored: false,
    // não permite deletar do banco, e inseri na coluna deletedAt a data da exclusão se o timestamps estiver ativado
    /* para evitar que o sequelize defina suas tabelas com o nome em plural automaticamente como permanencia ative a opção como true */
    //  freezeTableName: true,
  },
};
