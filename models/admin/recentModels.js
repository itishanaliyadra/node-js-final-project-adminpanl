const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title1: {
        type: String,
        required: true
    },
    title2: {
        type: String,
        required: true
    },
    images:{
        type: String,
        required: true,
    }, 
    status:{
        type:String,
        default:1
    }
});
const recent = mongoose.model('recent', schema);
module.exports = recent