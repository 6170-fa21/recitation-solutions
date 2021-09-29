const express = require('express');

const router = express.Router();

/**
 * Set username of active user.
 * 
 * @name POST /api/session
 */
router.post('/', (req, res) => {
  if (req.session.username === null || req.session.username === undefined) {
    if (req.body.username.length === 0) {
      res.status(400).json({ message: 'The user name must be at least 1 character.' }).end();
    } else {
      req.session.username = req.body.username;
      res.status(200).json({ data: `${req.session.username} has been signed in` }).end();
    }
  } else {
    res.status(400).json({ message: 'You are already signed in.' }).end();
  }
});


router.delete('/', (req, res) => {
  if (req.session.username === undefined) {
    res.status(400).json({message: "You must be logged in to log out"}).end();
  } else {
    let name = req.session.username;
    req.session.username = undefined;
    res.status(200).json({ message: `User ${name} has been logged out`}).end();
  }
});

module.exports = router;