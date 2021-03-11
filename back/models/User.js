const {Schema, model} = require('mongoose');

const newUser = new Schema({
    
    name: {type: String, required: true},
    email: {type: String, unique: true},
    typeUser:{type:String, default: 1},
    bloodtype:{type:String, default: 1},
    useridDomain:{type:Number, required: true},
    graphDomain:{type: String, required: true},
    createdAt:{type: Date, default: Date.now}

})

module.exports = model('User',newUser)
