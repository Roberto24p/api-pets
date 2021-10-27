const { Router } = require('express')
const controller = require('./controller')
const router = Router()

router.post('/', controller.addMessage)
router.get('/:id', controller.getByID)
module.exports = router
