require('dotenv').config()
module.exports =
{
  "development": {
    "username": "root",
    "password": process.env.MYSQL_PASS,
    "database": "carFacts",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "carFacts_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
