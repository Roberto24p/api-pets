const { Router } = require('express')
const router = Router()
const controller = require('./controller')
router.get('/', controller.getAll)
router.get('/:profile', controller.getById)
router.post('/interested', controller.interested)
module.exports = router