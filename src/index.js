require = require('esm')(module);

require('dotenv').config();
const { start } = require('./config/server.config.js');

start();
