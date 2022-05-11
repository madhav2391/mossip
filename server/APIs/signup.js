const user=require('../dataBase.js').Users
const route=require('express').Router()
// const {Logger} = require("./../logger");
var Logger = require('./../logger')

route.post('/',(req,res)=>{

      console.log(req.body.signemail)

     user.findOne({ where: {email:req.body.signemail} })
        .then(function(output) {
 
             console.log(output);
             if(output===null) 
             {
                user.create({
                    email:req.body.signemail,
                    Firstname:req.body.firstname,
                    Lastname:req.body.lastname,
                    password:req.body.signpass
                  }).then((user)=>{
                    Logger.info("Succesfully registered");
                     res.status(200).redirect('/');
                  })
                  .catch((err)=>{
                    Logger.error("User not added");
                      console.log(err); 
                     res.status(500).send({error:"user is not added"});
                  })
             }
             else
             {
              Logger.error("Email is already present");
              res.status(400).send('email is already present');
             } 
      })
      .catch((err)=>{
        Logger.info("User not added");
        res.status(501).send({error:"user is not added"});  
      }) 
})
exports=module.exports=route;