const express = require('express')
const pets = require('../apiServices/pets/rutasPets')
const users = require('../apiServices/users/rutasUser')
const router = express.Router()

router.use('/pets', pets)
router.use('/users', users)

module.exports = router
