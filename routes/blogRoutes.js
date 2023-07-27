const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')

router.get('/', blogController.blogIndex)
router.put('/:id', blogController.updateABlog)
router.get('/:id', blogController.showBlog)
router.delete('/:id', blogController.deleteABlog)
router.post('/', blogController.newBlog)

module.exports = router