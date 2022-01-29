const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const entry = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((personsEntry) => {
    if (personsEntry.age < 18) entry.child += 1;
    else if (personsEntry.age < 50) entry.adult += 1;
    else entry.senior += 1;
  });
  return entry;
}

// Requisito concluído com ajuda da Tiemi Faustino na mentoria das 16:00;
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const persons = countEntrants(entrants);
  const sumChild = persons.child * prices.child;
  const sumAdult = persons.adult * prices.adult;
  const sumSenior = persons.senior * prices.senior;

  return sumChild + sumAdult + sumSenior;
}

module.exports = { calculateEntry, countEntrants };
