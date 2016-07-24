const _ = require('underscore');

const sum = (arr) => {
  return _.reduce(arr, (memo, num) => {return memo + num }, 0);
}

module.exports = sum;
