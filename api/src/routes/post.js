const { Router } = require('express')
const router = Router()

var postController = require('../controllers/postController');

router.get('/index', postController.postList);

module.exports = router