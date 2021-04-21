const { Router } = require('express')
const router = Router()

const postController = require('../controllers/postController');

router.get('/index', postController.postList);

module.exports = router