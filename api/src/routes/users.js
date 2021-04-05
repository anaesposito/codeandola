const { Router } = require('express')
const router = Router()

var user_controller = require('../controllers/userController');

router.get('/index', user_controller.user_list);
router.post('/create', user_controller.user_create);

module.exports = router