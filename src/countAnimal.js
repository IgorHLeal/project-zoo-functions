// Precisei comentar a const abaixo para passar nos testes
// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Esse requisito foi feito primeiro usando o reduce dentro do 1° if; Mas ao ver uma
// explicação da Luá em uma thread no slack para a Tiemi Faustino, resolvi usar o forEach;
function countAnimals(animal) {
  if (!animal) {
    const animalSpecies = {};
    data.species.forEach((specie) => {
      animalSpecies[specie.name] = specie.residents.length;
    });
    return animalSpecies;
  }

  const foundSpecie = data.species.find((specie) => specie.name.includes(animal.specie));
  if (!animal.sex) {
    return foundSpecie.residents.length;
  }
  return foundSpecie.residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
