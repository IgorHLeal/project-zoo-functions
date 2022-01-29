const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];

  return ids.map((element) => data.species.find((specie) => specie.id === element));
}
module.exports = getSpeciesByIds;
