
const Shorts = require('../models/Shorts');

// Checks that the short name in the request body does not already exist
const shortNameDoesNotAlreadyExist = (req, res, next) => {
  if (Shorts.findOne(req.body.name) !== undefined) {
    res.status(400).json({
      error: `Short URL ${req.body.name} already exists.`,
    }).end();
    return;
  }
  next();
};

// Checks that the short name in the paramerters exists
const shortNameExists = (req, res, next) => {
  if (Shorts.findOne(req.params.name) === undefined) {
    res.status(404).json({
      error: `Short URL ${req.params.name} does not exist.`,
    }).end();
    return;
  }
  next();
};

// Checks that the username is set in session, i.e., user logged in
const userIsLoggedIn = (req, res, next) => {
  if (req.session.username === undefined) {
    res.status(403).json({
      error: 'You must be logged in in order to delete a short!'
    }).end();
    return;
  }
  next();
};

module.exports = Object.freeze({
  shortNameDoesNotAlreadyExist,
  shortNameExists,
  userIsLoggedIn,
});