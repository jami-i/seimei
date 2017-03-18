console.log("start!");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const treatRepeat = require('./treatRepeat');

const soukaku = require('./soukaku');
const tenkaku = require('./tenkaku');
const gaikaku = require('./gaikaku');
const chikaku = require('./chikaku');
const negaposi = require('./negaposi');
const jinkaku = require('./jinkaku');
const shakaikaku = require('./shakaikaku');
const sansai = require('./sansai-haichi');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/seimei', function (req, res) {
  const left = treatRepeat(req.body.last_name);
  const right = treatRepeat(req.body.first_name);

  const sou = soukaku(left,right);
  const ten = tenkaku(left, right);
  const shakai = shakaikaku(left, right);
  const gai = gaikaku(left, right);
  const chi = chikaku(left, right);
  const jin = jinkaku(left, right);
  const np = negaposi(left, right);
  const ss = sansai(ten.point, jin.point, chi.point);

  const result = Object.assign({}, sou, ten, shakai, gai, chi, jin, np);
  console.log(req.body);
  res.send(result);
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});

