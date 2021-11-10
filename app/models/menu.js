const mongoose=require('mongoose')
const { Module } = require('webpack')
const Schema=mongoose.Schema

//This is the blueprint or Schema of our table

const menuSchema = new Schema({
    name:{ type:String, required: true},
    image:{ type:String, required: true},
    price:{ type:Number, required: true},
    size:{ type:String, required: true},
})



module.exports = mongoose.model('Menu',menuSchema)