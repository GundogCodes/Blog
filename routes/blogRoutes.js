const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')

router.get('/', blogController.blogIndex)
router.get('/:id', blogController.showAComment)
router.put('/:id', blogController.updateABlog)
router.get('/:id', blogController.showBlog)
router.delete('/:id', blogController.deleteABlog)
router.delete('/:id', blogController.deleteAComment)
router.post('/', blogController.newBlog)
router.post('/:id', blogController.addComment)

module.exports = router