// const dotenv =require('dotenv'); // this is important!
// dotenv.config({ path: "config.env" });
console.log(process.env.NODE_ENV)
module.exports = {
    "test": {
        "username": "root",
        "password": "root",
        "database": "testgame",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "port":"8888"
    },
  "development": {
    "username": "root",
    "password": "password",
    "database": "memorygame",
    "host": "mysqldb",
    "dialect": "mysql",
    "port":"3306"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

};
