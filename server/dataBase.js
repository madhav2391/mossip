const Sequelize = require('sequelize');
// const {Logger} = require("./logger");
var Logger = require('./logger')
const config = require("./config/config.js")

console.log(config[process.env.NODE_ENV])
const sequelize = new Sequelize(config[process.env.NODE_ENV].database, config[process.env.NODE_ENV].username,config[process.env.NODE_ENV].password,{
    host: config[process.env.NODE_ENV].host,
    dialect: 'mysql',
    operatorsAliases: false,
    port : config[process.env.NODE_ENV].port,
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
        Logger.info("Database synced");
        console.log("this is res",res);
     console.log("database has synced");
    }
  )
  .catch((err)=>
    {
        Logger.error("Error creating database");
        console.log("this is err",err);
        console.error("error creating database");
    }   
  )
// }
  
module.exports={
    Users
}



