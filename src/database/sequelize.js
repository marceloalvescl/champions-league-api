/**
 * Imports
 */
const { Sequelize } = require('sequelize');
const getConnectionUrl = require('../utils/getConnectionUrl');

/**
 * Variáveis de ambiente para conexão com o banco de dados.
 */
const dialect = process.env.DB_DIALECT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const databaseName = process.env.DB_NAME;

/**
 * Gera URL de conexão.
 */
const connectionUrl = getConnectionUrl(
  dialect,
  user,
  password,
  host,
  port,
  databaseName
);
const sequelize = new Sequelize(connectionUrl);

/**
 * Exporta objeto de conexão.
 */
module.exports = sequelize;
