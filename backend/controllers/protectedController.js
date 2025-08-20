const dashboard = (req, res) => {
  res.json({ message: 'Welcome to your dashboard!', user: req.user })
}

module.exports = dashboard
