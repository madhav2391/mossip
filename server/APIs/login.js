const user=require('../dataBase.js').Users
const route=require('express').Router()
// const {Logger} = require("./../logger");
var Logger = require('./../logger')

route.post('/',(req,res)=>{
       console.log(req.body.email);
       console.log(req.body.password);
       user.findOne(
       { where: {
           email:req.body.email,
           password:req.body.password
       }     
      }).then((output)=>{
           console.log(output);
            if(output===null) 
            { 
              Logger.error('Could not Login');
              res.status(202).res.redirect('./../../index.html');
            }
            else 
            {
              Logger.info("Succesfully Logged in");   
              res.status(201).redirect('./../../main.html');
            } 
      }).catch((err)=>{
        Logger.error("User not added");
        res.status(501).send({error:"user is not added"});
      })
 
})

exports=module.exports=route;