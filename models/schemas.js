const mongoose = require('mongoose');

const { Schema } = mongoose;

const models = new Schema({
    firstname :{
        type: String,
        required : true
    },
    lastname :{
        type: String,
        required : true
    },
    email:{
        type: String,
        required: true,
    
        
    },
    username :{
        type: String,
        required : true
    },
    password :{
        type: String,
        required : true
    },

},
{
    timestamps : true
}
)

module.exports = mongoose.model('model', models)