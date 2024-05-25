/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

const lewis = {
  name: 'Lewis Smith',
  age: 25,
};
console.log(lewis);

function isOldEnoughToDrink(person: { age: number }): boolean {
  return person.age > 21;
}

function isOldEnoughToDrive(person: { age: number }): boolean {
  return person.age > 16;
}

function isOldEnoughToDrinkAndDrive(person: { age: number }): boolean {
  return person.age < 0;
}

console.log('isOldEnoughToDrink:', isOldEnoughToDrink(lewis));
console.log('isOldEnoughToDrive:', isOldEnoughToDrive(lewis));
console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(lewis));

function isUnderFive(number: number): boolean {
  return number < 5;
}
console.log('isUnderFive:', isUnderFive(10));

function isEven(number: number): boolean {
  return number % 2 === 0;
}
console.log('isEven', isEven(24));

function startsWithJ(string: string): boolean {
  return string[0] === 'J';
}
console.log('startsWithJ:', startsWithJ('jack'));

console.log('isOldEnoughToDrink:', isOldEnoughToDrink(lewis));
console.log('isOldEnoughToDrive:', isOldEnoughToDrive(lewis));
console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(lewis));

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH < 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log('categorizeAcidity:', categorizeAcidity(1));

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
console.log('introduceWarnerBro:', introduceWarnerBro('cody'));

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Godzilla X Kong: The New Empire';
    case 'comedy':
      return 'White Chicks';
    case 'horror':
      return 'The Nun';
    case 'drama':
      return 'Joker';
    case 'musical':
      return 'Wonka';
    case 'sci-fi':
      return 'Arrival';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log('recommendMovie:', recommendMovie('horror'));
