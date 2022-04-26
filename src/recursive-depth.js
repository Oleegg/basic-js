const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */class DepthCalculator {
  calculateDepth(arr) {

    if (Array.isArray(arr)) {
      function maxx(a, b) {
        return Math.max(a, b)
      }
      return 1 + arr.reduce((acc, el) => maxx(acc, this.calculateDepth(el)), 0)
    }
    return 0
  }
}

module.exports = {
  DepthCalculator
};
