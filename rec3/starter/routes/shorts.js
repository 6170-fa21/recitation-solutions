const express = require('express');

const Shorts = require('../models/Shorts');

const router = express.Router();

/**
 * List all shorts.
 * 
 * @name GET /api/shorts
 * 
 * @return {Short[]} - list of all stored shorts
 */
 router.get('/', (req, res) => {
   // TODO implement
  res.status(501).end();
});

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
router.post('/', (req, res) => {
  // TODO implement
  res.status(501).end();
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
router.put('/:name?', (req, res) => {
  // TODO implement
  res.status(501).end();
});

/**
 * Delete a short.
 * 
 * @name DELETE /api/shorts/:name
 * 
 * @return {Short} - the deleted short
 * @throws {404} - if short does not exist
 */
router.delete('/:name?', (req, res) => {
  // TODO implement
  res.status(501).end();
});

module.exports = router;