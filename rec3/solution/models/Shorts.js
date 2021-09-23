let data = [];

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
    const short = { name, url, creator };
    data.push(short);
    return short;
  }

  /**
   * Find a Short by Name.
   * 
   * @param {string} name - The name of the short to find
   * @return {Short | undefined} - the found short with above name
   */
  static findOne(name) {
    return data.filter(short => short.name === name)[0];
  }

  /**
   * @return {Short[]} an array of all of the Shorts
   */
  static findAll() {
    return data;
  }

  /**
   * Update a Short's URL.
   * 
   * @param {string} name - The name of the short to update
   * @param {string} url - The new URL to associate with the short
   * @return {Short | undefined} - The updated short
   */
  static updateOne(name, url) {
    const short = Shorts.findOne(name);
    short.url = url;
    return short;
  }

  /**
   * Delete a Short from the collection.
   * 
   * @param {string} name - name of Short to delete
   * @return {Short | undefined} - deleted Short
   */
  static deleteOne(name) {
    const short = Shorts.findOne(name);
    data = data.filter(s => s.name !== name);
    return short;
  }
}

module.exports = Shorts;