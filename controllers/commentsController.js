const Comment = require('../models/comments')

exports.showAllComments = async (req,res)=>{
    try {
        const allComments = await Comment.find({})
        res.json(allComments)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
exports.newComment = async (req,res)=>{
    try {
        const newComment = await Comment.create(req.body)
        res.json({message:'Posted!', posted:newComment})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
exports.updateAComment = async (req,res)=>{
    try {
        const foundComment = await Comment.findOneAndUpdate({'_id':req.params.id},req.body, {new:true})
        res.json({message:'comment updated!', editedPost:foundComment})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
exports.deleteAComment = async (req,res)=>{
    try {
        const findComment =  await Comment.findOneAndDelete({'_id':req.body.id})
        res.json('comment deleted')
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
exports.showAComment = async (req,res)=>{
    try {
        const findComment = await Comment.findOne({'_id':req.params.id})
        res.json(findComment)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
