const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        requeire:true,
    },
    lastName:{
        type:String,
        requeire:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
    },password:{
        type:String,
        required:true,
        select:false,
    },
    sexuality:{
        type:String,
        unique:true,
        requeire:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})
const User =  mongoose.model('User',UserShcema);

module.exports = User;