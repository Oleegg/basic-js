const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = []
  let num = arr.filter(el => el > 0)
  num.sort((a, b) => a - b)
  let x = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.push(arr[i])
    } else {
      result.push(num[x])
      x++
    }
  }
  return result
}

module.exports = {
  sortByHeight
};
