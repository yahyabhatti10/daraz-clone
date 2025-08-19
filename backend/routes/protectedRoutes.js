const express = require('express')
const router = express.Router()
const authenticateToken = require('../middleware/authenticateToken')
const dashboard = require('../controllers/protectedController')

router.get('/dashboard', authenticateToken, dashboard)

module.exports = router
