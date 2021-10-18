const express = require('express')
const pets = require('../apiServices/pets/rutasPets')
const users = require('../apiServices/users/rutasUser')
const profiles = require('../apiServices/profiles/rutasProfile')
const router = express.Router()

router.use('/pets', pets)
router.use('/users', users)
router.use('/profiles', profiles)
module.exports = router
