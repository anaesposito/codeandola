const { Router } = require('express')
const router = Router()

var comment_controller = require('../controllers/commentController');

router.get('/index', comment_controller.comment_list);

module.exports = router