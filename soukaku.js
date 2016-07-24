
const points = require('./points');
const countWrites = require('./countWrites');
const sum = require('./sum');

const calc = (left, right) => {
  const leftCount  = countWrites(left);
  const rightCount = countWrites(right);
  return sum(leftCount) + sum(rightCount);
}

module.exports = (left, right) => {
  const sou = calc(left, right);
  return {
    soukaku : {
      point : sou, label : points[sou]
    }
  }
}
