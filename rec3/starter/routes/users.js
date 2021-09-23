const express = require('express');

const router = express.Router();

/**
 * Set username of active user.
 * 
 * @name POST /api/session
 */
router.post('/session', (req, res) => {
  // TODO implement
  res.status(501).end();
});

module.exports = router;