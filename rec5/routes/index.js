const express = require('express');

const Shorts = require('../models/Shorts');

const router = express.Router();

/**
 * Serves homepage.
 * 
 * @name GET /
 */
router.get('/', (req, res) => {
  res.render('index');
});

/**
 * Access short URL.
 * 
 * @name GET /:name
 */
router.get('/:name?', (req, res) => {
  const short = Shorts.findOne(req.params.name);
  if (short === undefined) {
    res.status(404).json({
      error: `Short URL ${req.params.name} not found.`,
    }).end();
  } else {
    res.redirect(short.url);
  }
});


module.exports = router;