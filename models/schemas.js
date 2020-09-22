const mongoose = require('mongoose');

const {Schema} = mongoose;

const models = new Schema({
    firstName :{type: String},
    lastName : {type: String},
    emailaddress: {type: String},
    userName : {type: String},
    password : {type: String}

})

module.exports = mongoose.model('model', models)