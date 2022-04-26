const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    if (this.chain.length) return this.chain.length
    throw new NotImplementedError('Not implemented');
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return chainMaker
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length - 1) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return chainMaker
  },
  reverseChain() {
    this.chain.reverse()
    return chainMaker
  },
  finishChain() {
    let ressult = this.chain.concat()
    this.chain = []
    return ressult.join('~~')

  }
};

module.exports = {
  chainMaker
};
