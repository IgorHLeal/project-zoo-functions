const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((element) => element.name === animal);
  return animals.residents.every((minimumAge) => minimumAge.age > age);
}

module.exports = getAnimalsOlderThan;
