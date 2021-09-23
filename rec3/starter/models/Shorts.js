const data = [];

/**
 * @typedef Short
 * @prop {string} name - some string, valid in a URL path
 * @prop {string} url - link to an external source
 * @prop {string} creator - username
 */

/**
 * @class Shorts
 * 
 * Stores all Shorts. Note that all methods are static.
 * Wherever you import this class, you will be accessing the same data.
 */
class Shorts {
  /**
   * Add a Short to the collection.
   * 
   * @param {string} name - The name of the short
   * @param {string} url - The URL which the short represents
   * @param {string} creator - The creator of the short
   * @return {Short} - the newly created short
   */
  static addOne(name, url, creator = null) {
    // TODO implement
  }

  /**
   * Find a Short by Name.
   * 
   * @param {string} name - The name of the short to find
   * @return {Short | undefined} - the found short with above name
   */
  static findOne(name) {
    // TODO implement
  }

  /**
   * @return {Short[]} an array of all of the Shorts
   */
  static findAll() {
    // TODO implement
  }

  /**
   * Update a Short's URL.
   * 
   * @param {string} name - The name of the short to update
   * @param {string} url - The new URL to associate with the short
   * @return {Short | undefined} - The updated short
   */
  static updateOne(name, url) {
    // TODO implement
  }

  /**
   * Delete a Short from the collection.
   * 
   * @param {string} name - name of Short to delete
   * @return {Short | undefined} - deleted Short
   */
  static deleteOne(name) {
    // TODO implement
  }
}

module.exports = Shorts;