const mongoose=require('mongoose')
const { Module } = require('webpack')
const Schema=mongoose.Schema

//This is the blueprint or Schema of our table

const orderSchema = new Schema({
   customerId: { 
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: true

    },
    items: {type: Object, require: true},
    phone: {type: String, require: true},
    address: {type: String, require: true},
    paymentType: {type: String, default: 'COD'},
    status: {type: String, default: 'order_placed'},
}, {timestamps: true})    // timestamp is used for date and time

 

module.exports = mongoose.model('Order',orderSchema)