const Sequelize = require('sequelize');
// const {Logger} = require("./logger");
var Logger = require('./logger')
const config = require("./config/config.js")

console.log(config[process.env.NODE_ENV])
const sequelize = new Sequelize(config[process.env.NODE_ENV || "development" ].database, config[process.env.NODE_ENV|| "development" ].username,config[process.env.NODE_ENV|| "development" ].password,{
    host: config[process.env.NODE_ENV|| "development" ].host,
    dialect: 'mysql',
    operatorsAliases: false,
    port : config[process.env.NODE_ENV|| "development" ].port,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
// intializing the user table
const Users = sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
    }, 
    Firstname: {
      type: Sequelize.STRING,
      allowNuLL:false
    },
    Lastname:{
        type: Sequelize.STRING,
        allowNuLL:false
    },
    password:{
        type: Sequelize.STRING,
        allowNuLL:false
    }
  });
// let temp = false;
// while (!temp){
sequelize.sync()
  .then((res)=>
    {
      Logger.info("DatabaseSynced");
        console.log("this is res",res);
     console.log("database has synced");
    }
  )
  .catch((err)=>
    {
        Logger.error("DatabaseNotSynced");
        console.log("this is err",err);
        console.error("error creating database");
    }   
  )
// }
  
module.exports={
    Users
}



