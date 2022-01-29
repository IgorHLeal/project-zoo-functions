// Concluído com ajuda do Rafael Oliveira - Turma 19 - Tribo A na mentoria das 16:00

const data = require('../data/zoo_data');

const { species, hours } = data;
const allDays = Object.keys(hours);
const allAnimals = species.reduce((acc, curr) => {
  acc.push(curr.name);
  return acc;
}, []);

const days = (day) => {
  const listSpecies = species.filter((specie) => specie.availability.includes(day));
  return listSpecies.map((element) => element.name);
};

const hour = (day) => {
  const time = hours[day];
  return `Open from ${time.open}am until ${time.close}pm`;
};

const templates = () => {
  const answer = allDays.reduce((acc, curr) => ({
    ...acc,
    [curr]: { officeHour: hour(curr), exhibition: days(curr) },
  }), {});
  answer.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return answer;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return templates();
  }
  if (allDays.includes(scheduleTarget)) {
    const object = { [scheduleTarget]: templates()[scheduleTarget] };
    return object;
  }
  if (allAnimals.includes(scheduleTarget)) {
    // Poderia ser usado o find
    const animalName = species.filter((element) => element.name === scheduleTarget);
    return animalName[0].availability;
  }
  return templates();
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
