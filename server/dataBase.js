const Sequelize = require('sequelize');
// const {Logger} = require("./logger");
var Logger = require('./logger')

const sequelize = new Sequelize('memorygame', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  port : 49153,
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



