const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {}
  count = 0
  let sec = turnsSpeed / 3600
  for (let i = 0; i < disksNumber; i++) {
    count = ((count * 2) + 1)
  }
  result.turns = count
  result.seconds = Math.floor(count / sec)
  return result
}

module.exports = {
  calculateHanoi
};
