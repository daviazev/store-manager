const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({ xablau: 'xablau' });
});

router.get('/:id', async (req, res) => {});

module.exports = router;
