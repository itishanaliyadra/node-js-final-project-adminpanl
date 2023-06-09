const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    images:{
        type: String,
        required: true,
        default:"ulplodesImg/images-1681277306631img1.png",
    }
});
const admin = mongoose.model('admin', schema);
module.exports = admin