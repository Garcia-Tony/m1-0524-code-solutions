const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');

values.forEach((number, index, arr) => {
  console.log(number);
});

console.log('Reverse order:');

values.forEach((number, index, arr) => {
  console.log(arr[arr.length - 1 - index]);
});
