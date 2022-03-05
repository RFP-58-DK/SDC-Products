const { Pool, Client } = require('pg');
const config = require('../myConfig.js');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'product_information',
  user: 'granchez77',
  password: config
})

module.exports = pool;