const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { comparePassword, hashPassword } = require('../utils/auth/password')
const {
  generateAccessToken,
  generateRefreshToken,
} = require('../utils/auth/token')

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body
    if ((!firstName || !lastName, !email, !password)) {
      return res
        .status(400)
        .json({ message: 'Invalid or empty request fields' })
    }
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' })
    }

    const hashedPassword = await hashPassword(password)

    const user = User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    })

    res.status(201).json({ message: 'User created successfully', user })
  } catch (err) {
    res.status(500).json({ message: 'Server error', err: err.message })
  }
}

const login = async (req, res) => {
  try {
    const { email, password: reqPassword } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isMatch = await comparePassword(reqPassword, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' })
    }
    const accessToken = generateAccessToken({ id: user._id })
    const refreshToken = generateRefreshToken({ id: user._id })

    user.refreshToken = refreshToken
    await user.save()

    // const { password, refreshToken: _, ...userInfo } = user.toObject()

    res.status(200).json({
      message: 'Login successful',
      accessToken,
      refreshToken,
      // user: userInfo,
    })
  } catch (err) {
    res.status(500).json({ message: 'Server error', err: err.message })
  }
}

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body
  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token required' })
  }
  try {
    const user = await User.findOne({ refreshToken })
    if (!user) {
      return res.status(403).json({
        message:
          'Invalid refresh token. Did not find the user with this refresh token',
      })
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err) => {
      if (err) {
        return res.status(403).json({
          message:
            'Invalid refresh token, The token exists but its tampered or signed with wrong secret',
        })
      }
      const accessToken = generateAccessToken({ id: user._id })
      res.status(200).json({ accessToken })
    })
  } catch (err) {
    res.status(500).json({ message: 'Server error', err: err.message })
  }
}

const logout = async (req, res) => {
  const { refreshToken } = req.body
  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token required' })
  }
  try {
    const user = await User.findOne({ refreshToken })
    if (!user) {
      return res.status(403).json({ message: 'Invalid refresh token' })
    }
    user.refreshToken = null
    await user.save()
    res.status(200).json({ message: 'Logged out successfully' })
  } catch (err) {
    res.status(500).json({ message: 'Server error', err: err.message })
  }
}

module.exports = { signup, login, refreshToken, logout }
