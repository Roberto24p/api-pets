const express = require('express')
const pets = require('../apiServices/pets/rutasPets')
const users = require('../apiServices/users/rutasUser')
const profiles = require('../apiServices/profiles/rutasProfile')
const messages = require('../apiServices/messages/rutasMessages')
const login = require('../services/login')
const middleware = require('../middleware/auth')
const router = express.Router()

router.use('/login', login)
router.use('/pets', pets)
router.use('/users', users)
router.use('/profiles', middleware, profiles)
router.use('/messages', messages, function(req, res){
    res.send({message: "error xd"})
})
module.exports = router
