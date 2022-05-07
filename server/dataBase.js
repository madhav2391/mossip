const Sequelize = require('sequelize');
const sequelize = new Sequelize('memorygame', 'sampleuser', 'Game@123', {
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

sequelize.sync()
  .then(()=>
    {
     console.log("database has synced");
    }
  )
  .catch((err)=>
    {
        console.error("error creating database");
    }   
  )

  
module.exports={
    Users
}

