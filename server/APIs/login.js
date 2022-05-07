const user=require('../dataBase.js').Users
const route=require('express').Router()

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
              res.status(202).redirect('./../index.html');
            }
            else 
            {
              res.status(201).redirect('./../main.html');   
            } 
      }).catch((err)=>{res.status(501).send({error:"user is not added"})})
 
})

exports=module.exports=route;