const _ = require('underscore');
const countWrites = require('./countWrites');
const sum = require('./sum');
const points = require('./points');
const haichi = require('./haichi');

const jinkaku = (left, right) => {
  const leftCount = countWrites(_.last(left));
  const rightCount = countWrites(_.head(right));
  return sum(leftCount) + sum(rightCount);
}

module.exports = (left, right) => {
  const j = jinkaku(left, right)
  return {
    jinkaku : {
      point : j,
      label : points[j],
      position : haichi(j)
    }
  }
}
