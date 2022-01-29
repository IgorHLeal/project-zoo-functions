const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Parte do código foi resolvido anaisando os códigos dos colegas Danillo e Luá da Turma 19 - Tribo A;
function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const resident = species.find((specie) => specie.id === firstSpecie).residents;
  const oldest = resident.reduce((acc, current) => {
    if (current.age > acc.age) return current;
    return acc;
  });
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
