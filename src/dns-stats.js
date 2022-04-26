const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {}
  let part = domains.map(el => el.split('.').reverse().map(el => '.' + el))
  let sortPart = part.sort((a, b) => b.length - a.length)
  let result = {}
  for (let i = 0; i < sortPart[0].length - 1; i++) {
    let count = 1
    for (let k = 0; k < (sortPart[i].length); k++) {
      if (!sortPart[i - 1]) {
        result[sortPart[i][k]] = count
        continue
      }
      if (sortPart[i][k] == sortPart[i - 1][k]) {
        count++
      }
      result[sortPart[i][k]] = count
      count = 1
    }
  }
  let finish = {}
  let keys = Object.keys(result)
  let values = Object.values(result)
  for (let i = 0; i < keys.length; i++) {
    if (!i) {
      finish[keys[i]] = values[i]
    } else {
      finish[`${Object.keys(finish)[i - 1]}` + `${keys[i]}`] = values[i]
    }
  }
  return finish
}

module.exports = {
  getDNSStats
};