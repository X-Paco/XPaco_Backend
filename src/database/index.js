import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
/* 
importar depois os outros models: 

import { Model } from 'sequelize';
*/
import User from '../app/models/User';
import TypeUser from '../app/models/TypeUser';
import Production from '../app/models/Production';
import Material from '../app/models/Material';
import Favorite from '../app/models/Favorite';
import Media from '../app/models/Media';
import Profile from '../app/models/Profile';

const models = [TypeUser, User, Production, Material, Favorite, Media, Profile,];
class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(Model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();