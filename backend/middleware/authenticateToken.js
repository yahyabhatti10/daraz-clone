const jwt = require('jsonwebtoken')
const User = require('../models/User')

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.status(401).json({ message: 'Access token required' })

  jwt.verify(token, ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' })
    }
    try {
      const user = await User.findById(decoded.id)
      //   console.log(decoded)
      if (!user) return res.status(404).json({ message: 'User not found' })
      req.user = user
      next()
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Server error', err: error.message })
    }
  })
}

module.exports = authenticateToken
