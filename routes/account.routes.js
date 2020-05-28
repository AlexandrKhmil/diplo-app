const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../connection');
const sqlAccount = require('../sql/account');

const tokenHandler = require('../middleware/tokenHandler.middleware');
const errorHandler = require('../middleware/errorHandler.middleware');

const signToken = require('../functions/signToken');

const errorTypes = require('../constants/errors');

// GET 'api/account/auth'
router.get(
  '/auth', 
  tokenHandler,
  async (req, res) => {
    try {
      const { id } = req.token;

      const result = await db.one(sqlAccount.SELECT_EMAIL_BY_ID, id)
        .catch((err) => err);
      if (result instanceof Error) {
        return res.status(500).json({ msg: errorTypes.USER_NOT_FOUND });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ msg: errorTypes.AUTH_ERROR });
    }
  }
);

// POST 'api/account/login'
router.post(
  '/login', 
  [
    body('email', errorTypes.EMAIL_ERROR).normalizeEmail().isEmail(),
    body('password', errorTypes.PASSWORD_ERROR).isLength({ min: 5 }),
  ],
  errorHandler,
  async (req, res) => {
    try {
      const { email, password } = req.body;

      const result = await db.one(sqlAccount.SELECT_BY_EMAIL, email)
        .catch((err) => err);
      if (result instanceof Error) {
        return res.status(500).json({ msg: errorTypes.USER_NOT_FOUND });
      }

      const isMatch = await bcrypt.compare(password, result.password);
      if (!isMatch) {
        return res.status(500).json({ msg: errorTypes.PASSWORD_UNMATCH });
      }

      const token = signToken(result.id);

      return res.status(200).json({ token, email });
    } catch(err) {
      return res.status(500).json({ msg: errorTypes.AUTH_ERROR });
    }
  }
);

// POST 'api/account/register'
router.post(
  '/register', 
  [
    body('email', errorTypes.EMAIL_ERROR).normalizeEmail().isEmail(),
    body('password', errorTypes.PASSWORD_ERROR).isLength({ min: 5 }),
  ],
  errorHandler,
  async (req, res) => {
    try {
      const { email, password } = req.body; 
      const hashedPassword = await bcrypt.hash(password, 12);
      
      const result = await db.func(sqlAccount.FUNC_ADD, [email, hashedPassword])
        .then((data) => data[0][sqlAccount.FUNC_ADD])
        .catch((err) => err);
      if (result instanceof Error) {
        return res.status(500).json({ msg: errorTypes.EMAIL_EXISTS });
      }

      const token = signToken(result);

      return res.status(200).json({ token, email });
    } catch (err) {
      return res.status(500).json({ msg: errorTypes.REG_ERROR });
    }
  }
);

module.exports = router;