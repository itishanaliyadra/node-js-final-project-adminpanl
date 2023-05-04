const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    aother: {
        type: String,
        required: true
    },
    data:{
        type: String,
        required: true
    },
    category :{
        type: String,
        required: true
    },
    images:{
        type: String,
        required: true,
    },
    des:{
        type:String,
        default:1 
    } ,
    status:{
        type:String,
        default:1
    }
});
const post = mongoose.model('post', schema);
module.exports = post