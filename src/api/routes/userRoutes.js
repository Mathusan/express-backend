const express = require('express')

const userController = require('../controllers/userController')

const router =express.Router()

router.get('/users',userController.getUsers)
router.post('/register',userController.registerUser)
router.post('/login',userController.loginUser)
