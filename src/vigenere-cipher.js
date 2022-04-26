const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(method) {
    this.method = method
    return method
  }
  encrypt(str, coder) {
    if (!str || !coder) {
      throw new Error('Incorrect arguments!');
    }

    let result = [];
    let toUpper = str
    let x = Math.ceil((toUpper.replace(/ /g, '').length) / coder.length)
    if (x < 1) {
      x = 1
    }
    coder = coder.repeat(x).split('')
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ' ') {
        coder.splice(i, 0, ' ')
      }
    }
    coder = coder.join('')
    let codeA = 'A'.charCodeAt(0)
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ' ') {
        result.push(str[i])
      } else if (!(/[a-z]/i).test(str[i])) {
        result.push(str[i])
      } else {
        let index = str.toUpperCase().charCodeAt(i) - codeA
        let pop = coder.toUpperCase().charCodeAt(i) - codeA
        result.push(String.fromCharCode(codeA + (pop + index) % 26))
      }
    }
    if (this.method === false) {
      return result.reverse().join('')
    }
    return result.join('')




  }

  decrypt(str, coder) {
    if (!str || !coder) {
      throw new Error('Incorrect arguments!');
    }

    let result = [];
    let toUpper = str
    let x = Math.ceil((toUpper.replace(/ /g, '').length) / coder.length)
    if (x < 1) {
      x = 1
    }
    coder = coder.repeat(x).split('')
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ' ') {
        coder.splice(i, 0, ' ')
      }
    }
    coder = coder.join('')
    let codeA = 'A'.charCodeAt(0)
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ' ') {
        result.push(str[i])
      } else if (!(/[a-z]/i).test(str[i])) {
        result.push(str[i])
      } else {
        let index = str.toUpperCase().charCodeAt(i) - codeA
        let pop = coder.toUpperCase().charCodeAt(i) - codeA
        result.push(String.fromCharCode(codeA + (index - pop + 26) % 26))
      }
    }
    if (this.method === false) {

      return result.reverse().join('')
    }

    return result.join('')




  }
}
module.exports = {
  VigenereCipheringMachine
};
