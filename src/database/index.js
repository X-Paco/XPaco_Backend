import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
/* 
importar depois os outros models: 
import Type_user from '../app/models/Type_user';
import Production from '../app/models/Production';
import Material from '../app/models/Material';
import Favorite from '../app/models/Favorite';
import Contain from '../app/models/Contain';
import Media from '../app/models/Media';
import Profile from '../app/models/Profile';
*/
import User from '../app/models/User';
import { Model } from 'sequelize';

/* 
Inserir depois os outros models: 
[Type_user, User, Productions, Material, Favorite, Contain, Media, Profile];
*/
const models = [User];
class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(Model => model.init(this.connection));
  }
}

export default new Database();