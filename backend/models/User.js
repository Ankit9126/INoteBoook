const mongoose= require('mongoose');
// import { Schema } from mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
 name:{
    type:String,
    required:'enter your name'
 },
 email:{
    type:String,
    required:'enter your mail',
    unique:true
 },
 password:{
    type:String,
    required:true
 },
 date:{
    type:Date,
    default:Date.new
 }
});
const User=mongoose.model('user',UserSchema);
// User.createIndexes();
module.exports=User