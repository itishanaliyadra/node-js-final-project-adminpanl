require('dotenv').config();
const { log } = require('console');
const mongoose = require('mongoose');
const db = mongoose.connect(process.env.MODGOOSE);
if(db){
    console.log("DB IS CONNECT");
}else{
    console.log("DB IS NOT CONNECT");
}
module.exports= db
