const { Router } = require('express')
const router = Router()

router.use('/test', require('./test'))

module.exports = router