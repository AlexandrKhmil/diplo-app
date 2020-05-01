const { Router } = require('express');
const router = Router();
const { spawn } = require('child_process');
const db = require('../connection');

// GET 'api/algorithm/list'
router.get('/list',
  async (req, res) => {
    try {
      const query = `
        SELECT id, link, title, img_url AS imgurl, description
        FROM algorithm;
      `;
      const result = await db.any(query)
        .then((data) => data)
        .catch((error) => ({ error }));
      if (result.error) {
        return res.status(500).json({ msg: 'Ошибка получения списка!', err: result.error });
      }

      return res.status(200).json(result);
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
        if (data.toString() === 'error') return res.status(500).json({ msg: 'Ошибка выполенния!' });
        dataString += data.toString();
      });
      python.on('close', (code) => {
        if (code !== 0) return res.status(500).json({ msg: `Ошибка выполенния! ${code}` });
        return res.status(200).json({ data: JSON.parse(dataString), code })
      });
    } catch(error) {
      console.log(error)
      return res.status(500).json({ msg: 'Ошибка выполенния!' });
    }
  }
);

module.exports = router;