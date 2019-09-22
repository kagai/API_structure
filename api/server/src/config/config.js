require('dotenv').config();


module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'mip',
    username: 'postgres',
    password: 'password',
    host: '127.0.0.1',
    dialect: 'postgres',
    port : 5432
  },

  test: {
    database: 'mip',
    username: 'postgres',
    password: 'password',
    host: '127.0.0.1',
    dialect: 'postgres',
    port : 5432
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};