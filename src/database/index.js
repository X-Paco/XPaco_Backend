import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

const Usuario = require('../app/models/Usuarios');

Usuario.init(Connection);

module.exports = Connection;