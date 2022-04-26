const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let y = []
  for (let i = 0; i < n.toString().length; i++) {
    let x = n.toString().split('')
    let z = x.splice(i, 1)
    y.push(x)
  }
  let res = y.map(el => el.join(''));
  return Math.max.apply(null, res)
}

module.exports = {
  deleteDigit
};
