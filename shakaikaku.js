const initial = require('./initial');
const countWrites = require('./countWrites');
const sum = require('./sum');
const points = require('./points');

const shakaikaku = (left, right) => {
  const init = initial(right);
  var l2;
  if(typeof init == "string") {
    l2 = left.concat(init);
  } else {
    l2 = left.concat(init.join(""));
  }
  const leftCount = countWrites(l2);
  return sum(leftCount);
}

module.exports = (left, right) => {
  const s2 = shakaikaku(left, right);
  return {shakaikaku : {
    point : s2,
    label : points[s2]
  }}
}
