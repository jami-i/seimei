const writes = require('./writes');

const find = (c) => {
  const res = writes[c];
  if(!res) console.warn("画数不明：'" + c + "' [\\u" + c.charCodeAt(0).toString(16) +"]");
  //console.log(c, " => ", res);
  return res;
};

const writeCount = (str) => {
  if( typeof str === 'object') {
    return str.map(find);
  } else {
    return str.split('').map(find);
  }
}

module.exports = writeCount;
