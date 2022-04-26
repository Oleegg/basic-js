const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let leng = matrix[0].length
  let result = 0
  let except = []
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < leng; k++) {
      if (except.includes(k)) {
        continue
      }
      if (matrix[i][k] == 0) {
        except.push(k)
      } else {
        result += matrix[i][k]
      }
    }
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
