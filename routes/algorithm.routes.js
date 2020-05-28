const { spawn } = require('child_process');
const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const shortid = require('shortid');

const db = require('../connection');
const sqlAlgo = require('../sql/algorithm');

const errorHandler = require('../middleware/errorHandler.middleware');

const errorTypes = require('../constants/errors');

// GET 'api/algorithm/list'
router.get(
  '/list',
  async (req, res) => {
    try {
      const result = await db.any(sqlAlgo.GET_LIST);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ msg: errorTypes.ALGO_LIST_ERROR });
    }
  }
);

// GET 'api/algorithm/info'
router.get(
  '/info',
  async (req, res) => {
    try {
      const { link } = req.headers;
      const result = await db.one(sqlAlgo.GET_ONE, link);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ msg: errorTypes.ALGO_ONE_ERROR });
    }
  }
);

// GET 'api/algorithm/execute'
router.post(
  '/execute',
  [ 
    body('id', errorTypes.ALGO_ID_ERROR).isInt(),
    body('data', errorTypes.ALGO_DATA_ERROR).isArray(), 
  ],
  errorHandler,
  async(req, res) => {
    try {
      const { id, data } = req.body;

      const result = await db.one(sqlAlgo.GET_FILE, id)
        .catch((err) => err);
      if (result instanceof Error) {
        return res.status(500).json({ msg: errorTypes.ALGO_ONE_ERROR });
      }

      return res.status(200).json({
        id: shortid.generate(), 
        data, 
        meta: {
          loaded: parseInt(new Date().getTime() / 1000),
          algorithm: result.title,
        },
        code: 0, 
      });

      // const fileName = result.link;
      // const fileLocation = `./python_modules/${fileName}/__init__.py`;
      // const python = spawn('python', [fileLocation]);
      // const { data } = req.body;

      // python.stdin.write(JSON.stringify({ data, forward: 10 }));
      // python.stdin.end();

      // resultStr = '';
      // python.stdout.on('data', (data) => {
      //   resultStr += data.toString();
      // });

      // python.on('close', (code) => {
      //   if (code !== 0) {
      //     return res.status(500).json({ msg: errorTypes.ALGO_EXECUTE_ERROR });
      //   }

      //   let data = JSON.parse(resultStr);
      //   return res.status(200).json({
      //     id: shortid.generate(), 
      //     data, 
      //     meta: {
      //       loaded: parseInt(new Date().getTime() / 1000),
      //       algorithm: result.title,
      //     },
      //     code, 
      //   });
      // });
    } catch(err) {
      console.log(err)
      return res.status(500).json({ msg: errorTypes.ALGO_EXECUTE_ERROR });
    }
  }
);

module.exports = router;