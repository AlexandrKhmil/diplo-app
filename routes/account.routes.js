const { Router } = require('express');
const router = Router();
const jwtSecret = require('config').get('jwtSecret');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../connection');

const account = require('../middleware/account.middleware');
const error = require('../middleware/error.middleware');

const signToken = require('../function/signToken');

// GET 'api/account/auth'
router.get(
  '/auth', 
  account,
  async (req, res) => {
    try {
      const { id } = req.token;
      const query = require('../sql/account_auth');

      db.one(query, id)
        .then((data) => res.status(200).json(data))
        .catch((error) => {
          return res.status(500).json({ msg: 'Пользователь отсутствует!' });
        });
    } catch (error) {
      return res.status(500).json({ msg: 'Ошибка авторизации!' });
    }
  }
);

// POST 'api/account/login'
router.post(
  '/login', 
  [
    body('email', 'Некорректный email!').normalizeEmail().isEmail(),
    body('password', 'Некорректный пароль!').isLength({ min: 5 })
  ],
  error,
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const query = require('../sql/account_login');

      const result = await db.one(query, email)
        .then((data) => data)
        .catch((error) => ({ error }));
      if (result.error) {
        return res.status(500).json({ msg: 'Пользователь отсутствует!' });
      }

      const isMatch = await bcrypt.compare(password, result.password);
      if (!isMatch) {
        return res.status(500).json({ msg: 'Неверный пароль!' });
      }

      const token = signToken(result.id);

      return res.status(200).json({ token, email });
    } catch(e) {
      return res.status(500).json({ msg: "Ошибка авторизации!" });
    }
  }
);

// POST 'api/account/register'
router.post(
  '/register', 
  [
    body('email', 'Wrong email').normalizeEmail().isEmail(),
    body('password', 'Wrong password').isLength({ min: 5 }),
  ],
  error,
  async (req, res) => {
    try {
      const { email, password } = req.body; 
      const hashedPassword = await bcrypt.hash(password, 12);
      
      db.func('account_add_func', [email, hashedPassword])
        .then((data) => {
          const token = signToken(data[0].account_add_func);
          res.status(200).json({ token, email });
        })
        .catch((error) => {
          res.status(500).json({ msg: "Пользователь с таким email уже существует!" });
        });
    } catch (err) {
      return res.status(500).json({ msg: "Ошибка регистрации!" });
    }
  }
);

module.exports = router;