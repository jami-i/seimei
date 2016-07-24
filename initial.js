const _ = require('underscore');

const initial = (arr) => {
  if(arr.length <= 1){
    return arr;
  } else {
    return _.initial(arr);
  }
}

module.exports = initial;
