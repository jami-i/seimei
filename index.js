
const treatRepeat = require('./treatRepeat');

// const _ = require("underscore");
// const sum = require('./sum');
// const countWrites = require('./countWrites');

const soukaku = require('./soukaku');
const tenkaku = require('./tenkaku');
const gaikaku = require('./gaikaku');
const chikaku = require('./chikaku');
const negaposi = require('./negaposi');
const jinkaku = require('./jinkaku');
const shakaikaku = require('./shakaikaku');
const sansai = require('./sansai-haichi');

var readline = require('readline'),
      rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', function (input) {
  if(!input) return;
  const i = process.argv.length > 2 ? process.argv[2] + ' ' + input : input
  const split = i.split(' ')
  const left = treatRepeat(split[0]);
  const right = treatRepeat(split[1]);
  
  const sou = soukaku(left,right);
  const ten = tenkaku(left, right);
  const shakai = shakaikaku(left, right);
  const gai = gaikaku(left, right);
  const chi = chikaku(left, right);
  const jin = jinkaku(left, right);
  const np = negaposi(left, right);
  const ss = sansai(ten.point, jin.point, chi.point);

  const result = Object.assign({input: i}, sou, ten, shakai, gai, chi, jin, np);
  console.log(JSON.stringify(result));

});
