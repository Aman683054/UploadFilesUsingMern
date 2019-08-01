const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const lecture = require("./routes/api/lecture");
const fileUpload = require('express-fileupload');
var multer = require('multer')
var cors = require('cors');

app.use(fileUpload());
var cors = require("cors");

app.use(cors()); 
app.options("*", cors()); 
app.use(bodyParser.json({limit:'50mb',  extended: true }));
app.use(bodyParser.urlencoded({limit:'50mb',  extended: true,parameterLimit: 1000000 }));
const mongoURI = 'mongodb+srv://admin:admin@cluster0-xb8vd.gcp.mongodb.net/E-learning?retryWrites=true&w=majority'

mongoose.connect(mongoURI,{ useNewUrlParser: true },(err,res)=>{
    if(err){
        console.log("err");
    }
    else{
        console.log("connected");
    }
})

app.use((req,res,next)=>{
    console.log(`${new Date().toString()}=> ${req.originalUrl}`)
    next()
})
app.use(lecture)
app.use(express.static('public'))

//handles 404 error
app.use((req,res,next)=>{
    res.status(404).send("We think u are lost");
    next()
})

//handles 505 internal server error
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.sendFile(path.join(__dirname,'../public/500.html'))
    next()
})
const PORT=process.env.PORT ||3002
app.listen(PORT,()=>console.info(`Server is running on ${PORT}`))
