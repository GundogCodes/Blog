const mongoose = require('mongoose')

const commentsSchema =  new mongoose.Schema({
    name:{type:String},
    message:{type:String}
},{timestamps:true})

const Comment = mongoose.model('Comment', commentsSchema)

module.exports = Comment