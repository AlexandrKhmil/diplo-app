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
      const { algorithmLink } = req.params;

      const python = spawn('python', [`python/${algorithmLink}.py`]);
      let data = null;
      python.stdout.on('data', (res) => { data = res.toString(); });
      python.on('close', (code) => res.status(200).json({ data, code }));
    } catch(error) {
      return res.status(500).json({ msg: 'Ошибка выполенния!' });
    }
  }
);

module.exports = router;