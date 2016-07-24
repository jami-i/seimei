const countWrites = require('./countWrites');
const treatName = require('./treatName');
const sum = require('./sum');
const points = require('./points');
const haichi = require('./haichi');

const chikaku = (left, right) => {
  const nameCount = countWrites(treatName(right));
  return sum(nameCount);
}

module.exports = (left, right) => {
  const c = chikaku(left, right);
  return {
    chikaku : {
      point : c,
      label : points[c],
      position : haichi(c)
    }
  }
}
