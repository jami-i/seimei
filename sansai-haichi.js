const sansai = require('./sansai');
const haichi = require('./haichi');

module.exports = (t, j, c) => {

  return {
    sansai : {
      tenun : {
        point : haichi(t) + "-" + haichi(j),
        label : sansai.calc(haichi(t), haichi(j))
      },
      enun : {
        point : haichi(j) + "-" + haichi(c),
        label : sansai.calc(haichi(j), haichi(c))
      }
    }
  }
}
