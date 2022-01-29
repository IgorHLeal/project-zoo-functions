/* const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Em andamento com ajuda do Saulo Magalhães, Maju Domenciano na mentoria das 16:00
function namesAll(options) {
  return data.species.reduce((acc, current) => {
    const { location, name, residents } = current;
    if (!acc[location]) {
      acc[location] = [];
    }
    const residentsNames = {};
    residentsNames[name] = residents.map((items) => items.name);
    acc[location].push(residentsNames);
    return acc;
  }, {});
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return species.reduce((acc, current) => {
      const { location, name } = current;
      if (!acc[location]) acc[location] = [];
      acc[location].push(name);
      return acc;
    }, {});
  } if (options.includeNames === true) namesAll(options);
}

module.exports = getAnimalMap;
 */
