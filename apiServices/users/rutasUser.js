const { Router } = require('express')
const router = Router()
const controller = require('./controller')
router.get('/', controller.getAll)

router.post('/', controller.createUser)

module.exports = router
