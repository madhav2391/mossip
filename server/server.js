const express=require('express')
const app=express()
const path=require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/APIs',require('./APIs')) 

app.listen(7000,()=>{
    console.log("server is connected to http://localhost:7000")
})