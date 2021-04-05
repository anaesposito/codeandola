const { Router } = require('express')
const router = Router()

var post_controller = require('../controllers/postController');

router.get('/admin', post_controller.post_list);

module.exports = router