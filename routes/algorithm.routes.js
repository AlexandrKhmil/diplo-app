const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { spawn } = require('child_process');
const db = require('../connection');
const error = require('../middleware/error.middleware');

// GET 'api/algorithm/list'
router.get(
  '/list',
  async (req, res) => {
    try {
      const query = require('../sql/algo_list');
      db.any(query)
        .then((data) =>  res.status(200).json(data))
        .catch((error) => {
          res.status(500).json({ msg: 'Ошибка получения списка!', error });
        });
    } catch (error) {
      return res.status(500).json({ msg: 'Ошибка получения списка!', error });
    }
  }
);

// GET 'api/algorithm/info'
router.get(
  '/info',
  async (req, res) => {
    try {
      const { link } = req.headers;
      const query = require('../sql/algo_one.js');
      db.one(query, link)
        .then((data) =>  res.status(200).json(data))
        .catch((error) => {
          res.status(500).json({ msg: 'Ошибка получения списка!', error });
        });
    } catch (error) {
      return res.status(500).json({ msg: 'Ошибка получения списка!', error });
    }
  }
);

// GET 'api/algorithm/execute'
router.post(
  '/execute',
  [ 
    body('id').isInt(),
    body('data').isArray(), 
  ],
  error,
  async(req, res) => {
    try {
      const { id } = req.body;
      const query = require('../sql/algo_execute');

      const fileName = await db.one(query, id)
        .then((data) => data.link)
        .catch((error) => ({ error }));
      if (fileName.error) {
        return res.status(500).json({ msg: 'Алгоритм не найден!' });
      }

      const fileLocation = `./python_modules/${fileName}/__init__.py`;
      const python = spawn('python', [fileLocation]);
      const { data } = req.body;

      python.stdin.write(JSON.stringify({ data, forward: 10 }));
      python.stdin.end();

      resultStr = '';
      python.stdout.on('data', (data) => {
        resultStr += data.toString();
      });

      python.on('close', (code) => {
        if (code !== 0) {
          console.log(resultStr);
          return res.status(500).json({ 
            msg: `Ошибка выполенния! Код ошибки: ${code}`
          });
        }

        try {
          let data = JSON.parse(resultStr);
          return res.status(200).json({ data, code });
        } catch(error) {
          console.log(resultStr);
          return res.status(500).json({ msg: 'Ошибка выполенния!', error, });
        }
      });
    } catch(error) {
      return res.status(500).json({ msg: 'Ошибка!', error });
    }
  }
);

module.exports = router;