const express=require('express')
const app=express()
const path=require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'./../client')))
app.use('/APIs',require('./APIs')) 

app.listen(7000,()=>{
    console.log("server is connected to http://localhost:7000")
})

module.exports={
    app
}


const Sentry = require("@sentry/node");
// or use es6 import statements
// import * as Sentry from '@sentry/node';

const Tracing = require("@sentry/tracing");
// or use es6 import statements
// import * as Tracing from '@sentry/tracing';

Sentry.init({
  dsn: "https://7787d3090f8a4eeda3837781e55af88d@o1245576.ingest.sentry.io/6402831",

  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({
    app,
    }),
    ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

