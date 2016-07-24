const countWrites = require('./countWrites');

const negaposi = (left, right) => {
  const mapper = (i) => i % 2 != 0 ? '陽' : '陰';
  const l = countWrites(left).map(mapper)
  const r = countWrites(right).map(mapper)
  return l.join(' ') + " - " + r.join(' ')
}

module.exports = (left, right) => {
  return {
    nagaposi : negaposi(left, right)
  }
}
