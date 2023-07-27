const mongoose = require('mongoose')

const commentsSchema =  new mongoose.Schema({
    name:{type:String},
    message:{type:String}
})

const Comments = mongoose.model('Comments', commentsSchema)

module.exports = Comments