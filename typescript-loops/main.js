'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen()', getNumbersToTen());
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty()', getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatedWord(charger, 30)', repeatWord('Charger', 30));
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log('logEachCharacter()', logEachCharacter('Anthony Garcia'));
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const doubledArray = numbers[i] * 2;
    doubled.push(doubledArray);
  }
  return doubled;
}
console.log('doubleAll()', doubleAll([10, 20, 30, 40, 50]));
console.log('doubleAll()', doubleAll([2, 4, 6, 8, 10]));
console.log('doubleAll()', doubleAll([3, 6, 9, 12, 15]));
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
const key1 = { name: 'Tony', age: '23', height: '6 feet' };
console.log('getKeys()', getKeys(key1));
function getValues(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
const value1 = { name: 'Tony', age: '23', height: '6 feet' };
console.log('getValues()', getValues(value1));
