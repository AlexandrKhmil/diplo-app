const pgp = require('pg-promise')();
const config = require('config');

pgp.pg.defaults.ssl = process.env.DATABASE_URL && true;
pgp.pg.defaults.poolSize = 10;
const db = pgp(process.env.DATABASE_URL || config.get('db'));

module.exports = db;