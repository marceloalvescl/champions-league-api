/**
 * Carrega variáveis de ambiente.
 */
require('dotenv').config();

/**
 * Imports
 */
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

/**
 * Rotas da API.
 */
const routes = require('./routes');

/**
 * instância do express.
 */
const app = express();

/**
 * Middlewares
 */
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);
app.use(morgan('dev'));

async function run() {
  app.listen(process.env.PORT);
}

/**
 * Inicia a aplicação.
 */
run().then().catch(console.err);
