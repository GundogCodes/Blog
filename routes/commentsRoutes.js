const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/commentsController')

router.get('/', commentsController.showAllComments)
router.put('/:id', commentsController.updateAComment) //id of comment
router.get('/:id', commentsController.showAComment) //id of comment
router.delete('/:id', commentsController.deleteAComment) // id of comment
router.post('/:id', commentsController.newComment) //id of blogpost

module.exports = router