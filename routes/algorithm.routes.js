const { Router } = require('express');
const router = Router();
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
        return res.status(500).json({ msg: 'Ошибка получения списка!' });
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ msg: 'Ошибка получения списка!' });
    }
  }
);

module.exports = router;