const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{type:String, require:true},
    body:{type:String, require:true},
    comments:[{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}]
    
},{
    timestamps:true
})

const Blog = mongoose.model('Blog',blogSchema)

module.exports = Blog