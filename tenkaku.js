const points = require('./points');
const haichi = require('./haichi');
const treatName = require('./treatName');
const countWrites = require('./countWrites');
const sum = require('./sum');

const calc = (left, right) => {
  const leftCount = countWrites(treatName(left));
  return sum(leftCount);
}

module.exports = (left, right) => {
  const t = calc(left, right);
  return {
    tenkaku : {
      point : t,
      label : points[t],
      position : haichi(t)
    }
  }
}
