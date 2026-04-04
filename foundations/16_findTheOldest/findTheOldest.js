const findTheOldest = function (people) {
  let oldest = people[0];
  let currentYear = new Date().getFullYear();
  for (let i = 0; i < people.length; i++) {
    let current = people[i];
    let currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
    let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    if (currentAge > oldestAge) {
      oldest = current;
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
