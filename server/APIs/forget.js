const user=require('../dataBase.js').Users
const route=require('express').Router()
const nodemailer = require('nodemailer');
// const {Logger} = require("./../logger");
var Logger = require('./../logger')
let random_otp,storeemail;

route.post('/',(req,res)=>{ 
    random_otp=Math.floor(Math.random() * 90000) + 10000;
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'devopsdummy123@gmail.com',
      pass: 'Devopsdummy@123'
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
            Logger.error("InvalidEmail");
             res.status(404).send('email is not present');
         }
         else 
         {
          Logger.info('SendingOTP');
           res.redirect('../../passwordModifications/conformation.html');  
            const mailOptions = { 
           from: 'webdevlopment0501@gmail.com',
           to:req.body.forgetemail,           
           subject: 'OTP for forget password',  
           text: `Your five digit OTP is : ${random_otp}. Enter this otp in the website to reset your password`
  }; 
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) { 
      console.log(error);
    } else {
      Logger.info('OTPSent');
      console.log('Email sent: ' + info.response);
    }
  });
         
   
         } 
   }).catch((err)=>{res.status(503).send({error:"user is not added"})})


})


route.post('/otp',(req,res)=>{
        const otp=parseInt(req.body.changeotp);
             if(otp===random_otp)
             {
              Logger.info('OTP matched.Changing password');
               res.redirect('../../passwordModifications/changePassword.html');  
              }
             else   
             { 
              Logger.error('Incorrect OTP');
               res.status(402).send('otp was incorrect'); 
             }
}) 

route.post('/otp/changepassword',(req,res)=>{
         let pswd1,pswd2;
             pswd1=req.body.password;
             pswd2=req.body.confirmPassword;
             console.log("1:", pswd1)
             console.log("2:", pswd2)

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
                  Logger.error('password and confirm password not matching');
                 res.status(406).send('password and confirmpassword are not matching');  
                }
})




exports=module.exports=route;