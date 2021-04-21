const { Router } = require('express')
const router = Router()

const commentController = require('../controllers/commentController');

router.get('/index', commentController.commentList);

module.exports = router