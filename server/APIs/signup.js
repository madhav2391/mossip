const user=require('../dataBase.js').Users
const route=require('express').Router()

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
                     res.status(200).redirect('/');
                  })
                  .catch((err)=>{
                      console.log(err); 
                     res.status(500).send({error:"user is not added"});
                  })
             }
             else
             {
               res.status(400).send('email is already present');
             } 
      })
      .catch((err)=>{
        res.status(501).send({error:"user is not added"});  
      }) 
})
exports=module.exports=route;