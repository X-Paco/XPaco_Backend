import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Member from '../app/models/Member';
import User from '../app/models/User';
import Publication from '../app/models/Publication';
import Material from '../app/models/Material';
import Media from '../app/models/Media';
import Profile from '../app/models/Profile';

const models = [Member, User, Publication, Material, Media, Profile];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    /*  models.init (chama conexão banco)
        .map percorrer o mapa de model verifica se tem:
        model.associate(verifica se tem model associado) 
        && model.associate(c hama a conexão através do array models)
    */
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();