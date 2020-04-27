const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(500).json({ msg: 'Ошибка токена!' });
    }
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.token = decoded;
    next();
  } catch (e) {
    res.status(500).json({ msg: 'Ошибка токена!' });
  }
}