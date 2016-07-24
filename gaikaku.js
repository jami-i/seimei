
const _ = require('underscore');
const sum = require('./sum');
const treatName = require('./treatName');
const countWrites = require('./countWrites');
const points = require('./points');
const initial = require('./initial');


const gaikaku = (left, right) => {
  const leftCount = countWrites(initial(left));
  const rightCount = countWrites(_.last(treatName(right)));
  return sum(leftCount) + sum(rightCount);
}

module.exports = (left, right) => {
  const g = gaikaku(left, right);
  return {
    gaikaku : {
      point : g,
      label : points[g]
    }
  }
}
