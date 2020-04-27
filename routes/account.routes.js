const { Router } = require('express');
const router = Router();
const config = require('config');
const jwtSecret = config.get('jwtSecret');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../connection');
const account = require('../middleware/account.middleware')

// GET `api/account/auth`
router.get('/auth', account,
  async (req, res) => {
    try {
      const { id } = req.token;
      const query = `
        SELECT email
        FROM account
        WHERE id = $1;
      `;
      const result = await db.one(query, id)
        .then((data) => data)
        .catch((error) => ({ error }));
      if (result.error) {
        return res.status(500).json({ msg: 'Пользователь отсутствует!' });
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ msg: 'Ошибка авторизации!' });
    }
  }
);

// POST `api/account/login`
router.post('/login', [
    body('email', 'Некорректный email!').normalizeEmail().isEmail(),
    body('password', 'Некорректный пароль!').isLength({ min: 5 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(500).json({ 
          msg: 'Ошибка заполнения полей!',
          errors: errors.array(),
        });
      }

      const { email, password } = req.body;
      const query = `
        SELECT id, password
        FROM account
        WHERE email = $1;
      `;
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

      const token = jwt.sign(
        { id: result.id },
        jwtSecret,
        { expiresIn: '1h' }
      ); 
      return res.status(200).json({ token, email });
    } catch(e) {
      return res.status(500).json({ msg: "Ошибка авторизации!" });
    }
  }
);

// POST `api/account/register`
router.post('/register', [
    body('email', 'Wrong email').normalizeEmail().isEmail(),
    body('password', 'Wrong password').isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(500).json({
          msg: 'Ошибка заполнения полей!',
          errors: errors.array(),
        });
      }

      const { email, password } = req.body; 
      const hashedPassword = await bcrypt.hash(password, 12);
      const result = await db.func('account_add', [email, hashedPassword])
        .then(data => data[0].account_add)
        .catch(error => ({ error }));
      if (result.error) {
        return res.status(500).json({ 
          msg: "Пользователь с таким email уже существует!"
        });
      }

      const token = jwt.sign(
        { id: result },
        jwtSecret,
        { expiresIn: '1h' }
      );
      return res.status(200).json({ token, email }); 
    } catch (e) {
      return res.status(500).json({ msg: "Ошибка регистрации!" });
    }
  }
);

module.exports = router;