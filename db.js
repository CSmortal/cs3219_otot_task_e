const { Pool } =  require('pg');
require('dotenv').config();

const { PG_HOST, PG_USER, PG_PASSWORD, PG_DB_NAME } = process.env;

console.log(PG_HOST, PG_USER, PG_PASSWORD, PG_DB_NAME);


module.exports = new Pool({
  user: PG_USER,
  host: PG_HOST,
  password: PG_PASSWORD,
  database: PG_DB_NAME
})