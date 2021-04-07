const { Router } = require('express')
const router = Router()

var userController = require('../controllers/userController');

router.get('/index', userController.userList);
router.post('/create', userController.userCreate);

module.exports = router