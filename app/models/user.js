const mongoose=require('mongoose')
const { Module } = require('webpack')
const Schema=mongoose.Schema

//This is the blueprint or Schema of our table

const userSchema = new Schema({
    name:{ type:String, required: true},
    email:{ type:String, required: true, unique: true},
    password:{ type:String, required: true},
    role:{ type:String, default: 'customer'},
}, {timestamps: true})    // timestamp is used for date and time



module.exports = mongoose.model('User',userSchema)