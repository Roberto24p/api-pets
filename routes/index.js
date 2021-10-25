const express = require('express')
const pets = require('../apiServices/pets/rutasPets')
const users = require('../apiServices/users/rutasUser')
const profiles = require('../apiServices/profiles/rutasProfile')
const messages = require('../apiServices/messages/rutasMessages')
const router = express.Router()

router.use('/pets', pets)
router.use('/users', users)
router.use('/profiles', profiles)
router.use('/messages', messages)
module.exports = router
