const valiteUtils = function() {
  /**
   * @param {string} path
   * @returns {Boolean}
   */
  function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
  }

  /**
   * URL地址
   * @param {*} s
   */
  function isURL(s) {
    return /^http[s]?:\/\/.*/.test(s);
  }
  return {
    isExternal,
    isURL
  };
};
module.exports = valiteUtils();

