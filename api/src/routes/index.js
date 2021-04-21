const { Router } = require('express');
const router = Router();

//rutas en minuscula porque se puede traer 1 o varios
router.use('/user', require('./user'));
router.use('/post', require('./post'));
router.use('/comment', require('./comment'));

module.exports = router;