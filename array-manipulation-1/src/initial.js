'use strict';
/* exported initial */
function initial(array) {
  const arr = [];
  const length = array.length - 1;
  for (let i = 0; i < length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
