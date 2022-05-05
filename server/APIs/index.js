const route=require('express').Router()
route.use('/login',require('./login'))
route.use('/signup',require('./signup'))
route.use('/forget',require('./forget'))
exports=module.exports=route