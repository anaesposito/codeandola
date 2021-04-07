const { Router } = require('express')
const router = Router()

var commentController = require('../controllers/commentController');

router.get('/index', commentController.commentList);

module.exports = router