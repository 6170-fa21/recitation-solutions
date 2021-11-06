const express = require('express');

const Short = require('../models/Short');
const controller = require('./shorts-controller');

const validateThat = require('./middleware');

const router = express.Router();

/**
 * List all shorts.
 * 
 * @name GET /api/shorts
 * 
 * @return {Short[]} - list of all stored shorts
 */
router.get('/', (req, res) => {
  const shorts = controller.getAll();
  res.status(200).json(shorts).end();
})

//TODO: EDIT THESE TO USE SHORTS-CONTROLLER
/**
 * Create a short.
 * 
 * @name POST /api/shorts
 * 
 * @param {string} name - name of short (link will be /:short)
 * @param {string} url - link short points to
 * @return {Short} - the created short
 * @throws {400} - if name is already taken
 */
router.post('/', [validateThat.shortNameDoesNotAlreadyExist], (req, res) => {
  const short = Short.addOne(req.body.name, req.body.url, req.session.username); 
  res.status(200).json(short).end();
});

/**
 * Update a short.
 * 
 * @name PUT /api/shorts/:name
 * 
 * @param {string} url - the new URL to point to
 * @return {Short} - the updated short
 * @throws {404} - if short does not exist
 */
router.put('/:name?', [validateThat.shortNameExists], (req, res) => {
  const short = (req.body.isCount) 
    ? Short.incrementOne(req.params.name) 
    : Short.updateOne(req.params.name, req.body.url);
  res.status(200).json(short).end();
});

/**
 * Delete a short.
 * 
 * @name DELETE /api/shorts/:name
 * 
 * @return {Short} - the deleted short
 * @throws {404} - if short does not exist
 */
router.delete(
  '/:name?', 
  [
    validateThat.userIsLoggedIn,
    validateThat.shortNameExists,
  ],
  (req, res) => {
  const short = Short.deleteOne(req.params.name);
  res.status(200).json(short).end();
});

module.exports = router;