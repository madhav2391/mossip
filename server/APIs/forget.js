const user=require('../dataBase.js').Users
const route=require('express').Router()
const nodemailer = require('nodemailer');
const {Logger} = require("./../logger");
let random_otp,storeemail;

route.post('/',(req,res)=>{ 
    random_otp=Math.floor(Math.random() * 90000) + 10000;
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'webdevlopment0501@gmail.com',
      pass: 'sairam0501@'
    }   
  });
    console.log( req.body.forgetemail);  
    storeemail=req.body.forgetemail;
    user.findOne(    
    { where: {
        email:req.body.forgetemail
    }       
   }).then((output)=>{
        
        console.log(output); 
         if(output===null) 
         {  
             res.status(404).send('email is not present');
             Logger.error("Email not present");
         }
         else 
         {
          Logger.info('Email present, sending OTP...');
           res.redirect('../../passwordModifications/conformation.html');  
            const mailOptions = { 
           from: 'webdevlopment0501@gmail.com',
           to:req.body.forgetemail,           
           subject: 'change',  
           text: `Your for changing your ${random_otp}`
  }; 
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) { 
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      Logger.info('OTP sent to email');
    }
  });
         
   
         } 
   }).catch((err)=>{res.status(503).send({error:"user is not added"})})


})


route.post('/otp',(req,res)=>{
        const otp=parseInt(req.body.changeotp);
             if(otp===random_otp)
             {
               res.redirect('../../passwordModifications/changePassword.html');
               Logger.info('OTP matched.Changing password');  
              }
             else   
             { 
               res.status(402).send('otp was incorrect')
               Logger.error('Incorrect OTP');  
             }
}) 

route.post('/otp/changepassword',(req,res)=>{
         let pswd1,pswd2;
             pswd1=req.body.password;
             pswd2=req.body.confirmpassword;
                if(pswd1===pswd2)
                {
                    let updateValues = { password:pswd1};
                      user.update(updateValues, { where: { email:storeemail } }).then((result) => {
                        // here your result is simply an array with number of affected rows
                        console.log(result); 
                        res.redirect('/');
                      // [ 1 ]    
                    });       
                }
                else
                {
                 res.status(406).send('password and confirmpassword are not matching')
                 Logger.error('password and confirm password not matching');   
                }
})




exports=module.exports=route;