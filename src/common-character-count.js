const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let x = s1.split('')
  let y = s2.split('')
  let count = 0
  www: for (let i = 0; i < x.length; i++) {
    for (let k = 0; k < y.length; k++) {
      if (x[i] === y[k]) {
        count++
        y.splice(k, 1)
        console.log(y);
        continue www
      }
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
