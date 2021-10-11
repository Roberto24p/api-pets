const { Router } = require('express')
const router = Router()
const controller = require('./controller')
router.get('/', function(req, res){
   res.send(resp)
})

router.post('/', controller.createUser)

module.exports = router
