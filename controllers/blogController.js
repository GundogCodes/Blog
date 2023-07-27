const Blog = require('../models/blog')

exports.blogIndex = async (req,res)=>{
    try {
        const allPosts = await Blog.find({})
        res.json(allPosts)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
exports.newBlog = async (req,res)=>{
    try {
        const newBlog = await Blog.create(req.body)
        res.json({message:'Posted Blog!', posted:newBlog})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
exports.updateABlog = async (req,res)=>{
    try {
        const foundBlog = await Blog.findOneAndUpdate({'_id':req.params.id},req.body, {new:true})
        res.json({message:'blog updated!', editedPost:foundBlog})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
exports.deleteABlog = async (req,res)=>{
    try {
        const foundBlog =  await Blog.findOneAndDelete({'_id':req.body.id})
        res.json({deletedBlog:foundBlog})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
exports.showBlog = async (req,res)=>{
    try {
        const foundPost = await Blog.findOne({'_id':req.params.id})
        res.json(foundPost)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

