const { Router } = require('express')
const controller = require('./controller')
const router = Router()

router.post('/', controller.createPet)
router.get('/', controller.getPetsAdoption)

module.exports = router
