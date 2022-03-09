const { Pool, Client } = require('pg');
const config = require('../myConfig.js');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: config.database,
  user: config.username,
  password: config.password
})

module.exports = pool;