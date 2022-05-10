const Sequelize = require('sequelize');
const sequelize = new Sequelize('memorygame1', 'root', 'Madhav@19', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
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
        console.log("this is res",res);
     console.log("database has synced");
    }
  )
  .catch((err)=>
    {
        console.log("this is err",err);

        console.error("error creating database");
    }   
  )
// }
  
module.exports={
    Users
}

