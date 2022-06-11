const express = require("express"); // importing express module
const path =require("path");   // importing path module 
const schedule = require("node-schedule");   // importing node-schedule module
const app=express();   //making app from express
const port=80;   //initilizing the port



app.use( express.urlencoded());
app.set('view engine' , 'pug');
app.set('views',path.join(__dirname,'view'));


app.get('/',(req,res)=>{
    res.status(200).render('index.pug')
})

app.post('/',(req,res)=>{
    var datetime=req.body.datetime;
    var link=req.body.link;
    schedule.scheduleJob(datetime,()=>{
    console.log(link);
    })
    
    res.status(200).render('index.pug');
})

app.listen(port,()=>{
    console.log(`The app is running at localhost:${port}`)
})



