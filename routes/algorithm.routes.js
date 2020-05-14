const { Router } = require('express');
const router = Router();
const { spawn } = require('child_process');
const db = require('../connection');

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

// GET 'api/algorithm/{id}/execute'
router.get('/:algorithmLink/execute',
  async (req, res) => {
    try {
      const { algorithmLink } = req.params,
            fileLocation = `./python_modules/${algorithmLink}/__init__.py`,
            python = spawn('python', [fileLocation]),
            dataInput = JSON.parse(req.headers.data);

      python.stdin.write(JSON.stringify(dataInput));
      python.stdin.end();

      dataString = '';

      python.stdout.on('data', (data) => {
        dataString += data.toString();
      });
      python.on('close', (code) => {
        if (code !== 0) return res.status(500).json({ msg: `Ошибка выполенния! ${code}, ${dataString}`});
        let data;
        try {
          data = JSON.parse(dataString);
          return res.status(200).json({ data, code });
        } catch(e) {
          return res.status(500).json({ msg: 'Ошибка выполенния!', error: e, dataString })
        }
      });
    } catch(error) {
      console.log(error)
      return res.status(500).json({ msg: 'Ошибка выполенния!' });
    }
  }
);

module.exports = router;