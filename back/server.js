const express = require('express');
const path =require('path');
const bodyParser = require('body-parser');
const cors= require('cors');
const mongoose = require('mongoose');
const config = require('./db');
// const con = require('..');

mongoose.Promise=global.Promise;
mongoose.connect(config.db);

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(/)
var port = process.env.PORT || 4000;

app.listen(port,function(){
    console.log('serveri node ' , port);
});
