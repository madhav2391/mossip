// const dotenv =require('dotenv'); // this is important!
// dotenv.config({ path: "config.env" });
console.log(process.env.NODE_ENV)
module.exports = {
    "test": {
        "username": "root",
        "password": "Madhav@19",
        "database": "testgame",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "port":"3306"
    },
  "development": {
    "username": "root",
    "password": "Madhav@19",
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